import {Collapse, Input} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import React, {useMemo, useState} from "react";
import './VariablesPage.less';
import {useAppSelector} from "../../hooks/redux";
import {VariablesList} from "../../components/VariablesList/VariablesList";
import Search from "antd/es/input/Search";

export const VariablesPage = () => {

    const [allKeys, setAllKeys] = useState([]);
    const [search, setSearch] = useState('');
    const variables = useAppSelector(state => state.variableReducer.variables);
    const signatories = useAppSelector(state => state.signatoryReducer.signatories);

    const prefix = (
        <SearchOutlined
            style={{
                fontSize: 16,
                color: 'gray',
                marginRight: '10px',
            }}
        />
    )

    const changeHandler = (panel: any) => {
        setAllKeys(panel);
    }

    const collapseAll = () => {
        setAllKeys([])
    }

    const filteredVariables = useMemo(() => {
        return variables.filter((variable) => variable.includes(search));
    }, [search, variables])

    const filteredSignatories = useMemo(() => {
        const result: any = [];
        signatories.forEach((signatory) => {
            result.push({title: signatory.title, variables: signatory.variables.filter((variable) => variable.includes(search))})
        })
        return result;
    }, [search, signatories])

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <div className='variables-page'>
            <div className='operations-container'>
                <Input className='search-input' prefix={prefix} placeholder="Поиск" onChange={searchHandler} />
            </div>
            <div className="collapse-container">
                <button className="collapse-btn" onClick={collapseAll}>Collapse all</button>
            </div>
            <Collapse onChange={changeHandler} activeKey={allKeys} ghost>
                <Collapse.Panel key='1' header='Network Entity'>
                    <VariablesList
                        items={filteredVariables}
                    />
                </Collapse.Panel>
                <Collapse.Panel key='2' header='Signatories'>
                    <VariablesList
                        items={filteredSignatories} withSignatory
                    />
                </Collapse.Panel>
            </Collapse>
        </div>
    )
}

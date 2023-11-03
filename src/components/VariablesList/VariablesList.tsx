import {Variable} from "../Variable/Variable";
import './VariablesList.less'
import {ReactNode} from "react";
import {useAppSelector} from "../../hooks/redux";

interface VariablesListProps {
    items: string[] | VariablesWithSignatory[];
    withSignatory?: boolean;
}

interface VariablesWithSignatory {
    title: string;
    variables: string[];
}

export const VariablesList = ({
    items,
    withSignatory = false
}: VariablesListProps) => {

    const insertVariable = (variable: string) => {
        return Word.run( async (context) => {
            const body = context.document.body.insertText(`· ${variable} ·`, Word.InsertLocation.end);
            body.font.highlightColor = '#D9F7BE'
        });
    }

    if (withSignatory) {
        return (
            <div>
                {items.map((item, index) => {
                    const variables: ReactNode[] = []
                    // @ts-ignore
                    if ('title' in item) {
                        item.variables.forEach((variable) => {
                            variables.push(<Variable key={variable} text={variable} onClick={() => insertVariable(variable)}/>)
                        })
                        return (<div key={index}>
                            {variables && <h4 key={item.title} className='signatory'>{item.title}</h4>}
                            <div className="container">{variables}</div>
                        </div>)
                    }
                })}
            </div>
        )
    }

    return (
        <div className="container">
            {items.map((variable) => {
                if (typeof variable === 'string') {
                    return <Variable
                        text={variable}
                        onClick={() => insertVariable(variable)}
                        key={variable}
                    />
                }
            })}
        </div>
    )
}

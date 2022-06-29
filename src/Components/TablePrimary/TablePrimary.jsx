import React from 'react'
import { Link } from 'react-router-dom'
import './TablePrimary.css'

export default function TablePrimary({data:{head,body}}) {
  return (
    <table className="table-primary" cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>
                {
                    head.map((item,index) => (
                        <th key={index}>{item}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                body.map((bodyData,index) => (
                    <tr key={index}>
                        {
                            bodyData.map((item,key) => (
                                <td key={key} className="section-para">
                                    <span>{item.value}</span>
                                    {
                                        item.button&&
                                        <Link to={item.link} className={item.type}>{item.button}</Link>
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

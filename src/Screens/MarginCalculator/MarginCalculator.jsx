import React from 'react'
import Pagination from '../../Components/pagination/Pagination'
import './MarginCalculator.css'
import TableTab from '../../Components/TableTabs/TableTab'

export default function MarginCalculator() {
    return (
        <main className="margin-calculator-page">
            <section className="margin-banner container-padding">
                <div className="content-section">
                    <h1 className="main-title">Margin Calculator</h1>
                    <h3 className="section-subtitle">Determine your required margin using the equity margin calculator.</h3>
                </div>
                <div className="banner-img-wrapper">
                    <img src="/images/margin calculator/banner.png" alt="" className="banner-img" />
                </div>
            </section>
            <div className="Margin-Table">
                <TableTab />
                <Pagination />
            </div>
        </main>
    )
}

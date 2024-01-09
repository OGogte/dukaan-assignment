import React, { useState } from 'react';
import styles from '../styles/MainBox.module.css';
import search from '../assets/search.svg';
import sort from '../assets/sort.svg';
import download from '../assets/download.svg';
import triangleIcon from '../assets/triangleIcon.svg';
import info from '../assets/info.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import tableEntries from './tableEntries';
export default function MainBox() {
    const [selectedMonth, setSelectedMonth] = useState("This Month");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const entriesPerPage = 6;

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        setCurrentPage(1);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const filteredEntries = selectedMonth === "This Month" ? tableEntries.slice(0, 100) : tableEntries.slice(100);
    const searchedEntries = searchQuery
        ? filteredEntries.filter(entry => entry.orderId.toLowerCase().includes(searchQuery.toLowerCase()))
        : filteredEntries;

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = searchedEntries.slice(indexOfFirstEntry, indexOfLastEntry);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.mainBox}>
            <div className={styles.outerBox}>
                <div className={styles.topBox}>
                    <div className={styles.title}>
                        <div className={styles.overview}>Overview</div>
                        <div className={styles.month}>
                            <select
                                className={styles.monthDropdown}
                                value={selectedMonth}
                                onChange={handleMonthChange}
                            >
                                <option value="This Month">This Month</option>
                                <option value="Last Month">Last Month</option>

                            </select>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.orderBox}>
                            <div className={styles.orders}>
                                <div className={styles.orderText}>Online orders</div>
                                <div className={styles.orderNumbers}> 231</div>
                            </div>
                        </div>
                        <div className={styles.amountBox}>
                            <div className={styles.amount}>
                                <div className={styles.amountText}>Amount Received</div>
                                <div className={styles.amountNumber}>₹23,92,312.19</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.bottomBoxTitle}>Transactions | This Month</div>
                    <div className={styles.tableBox}>
                        <div className={styles.tableHeader}>
                            <div className={styles.searchBar}>
                                <div className={styles.searchBox}>
                                    <img src={search} className={styles.searchIcon} alt="search" />
                                    <input
                                        type="text"
                                        className={styles.searchField}
                                        placeholder="Search by order ID..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className={styles.iconBox}>
                                    <div className={styles.sortBox}>
                                        <div className={styles.sortText}>Sort</div>
                                        <img src={sort} className={styles.sortIcon} alt='sort' />
                                    </div>
                                    <div className={styles.downloadBox}>
                                        <img src={download} className={styles.downloadIcon} alt='download' />
                                    </div>
                                </div>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Order date <img src={triangleIcon} alt='triangle' /></th>
                                        <th>Order Amount</th>
                                        <th><div className={styles.infoBox}><img className={styles.infoIcon} src={info} alt='info' />Transaction fees </div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentEntries.map((entry, index) => (
                                        <tr key={index}>
                                            <td>{entry.orderId}</td>
                                            <td>{entry.orderDate}</td>
                                            <td>{entry.orderAmount}</td>
                                            <td>{entry.transactionFees}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.paginationBox}>
                                <div className={styles.paginationPrevious} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                    <img src={left} alt='left' className={styles.paginationIcon} />
                                    <div className={styles.previousText}>Previous</div>
                                </div>
                                <div className={styles.pageNumber}>
                                    {Array.from({ length: Math.ceil(filteredEntries.length / entriesPerPage) }, (_, index) => (
                                        <div key={index} className={`${styles.individualComponent} ${currentPage === index + 1 ? styles.active : ''}`} onClick={() => paginate(index + 1)}>
                                            <div className={styles.pageNumberText}>{index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.paginationNext} onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredEntries.length / entriesPerPage)}>
                                    <div className={styles.previousText}>Next</div>
                                    <img src={right} alt='left' className={styles.paginationIcon} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

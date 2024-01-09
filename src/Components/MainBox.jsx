import React from 'react';
import styles from '../styles/MainBox.module.css';
import downBlack from '../assets/downBlack.svg';
import search from '../assets/search.svg';
import sort from '../assets/sort.svg';
import download from '../assets/download.svg';
import triangleIcon from '../assets/triangleIcon.svg';
import info from '../assets/info.svg';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import { useState } from 'react';
export default function MainBox() {
    const [selectedMonth, setSelectedMonth] = useState("This Month");

    // Dropdown change handler
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
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
                                <tr>
                                    <th>Order ID</th>
                                    <th>Order date <img src={triangleIcon} alt='triangle' /></th>
                                    <th>Order Amount</th>
                                    <th><div className={styles.infoBox}><img className={styles.infoIcon} src={info} alt='info' />Transaction fees </div></th>
                                </tr>
                                <tr>
                                    <td>#281209</td>
                                    <td>7 July, 2023</td>
                                    <td>₹1,278.23</td>
                                    <td>₹22</td>
                                </tr>
                                <tr>
                                    <td>#281209</td>
                                    <td>7 July, 2023</td>
                                    <td>₹1,278.23</td>
                                    <td>₹22</td>
                                </tr>
                                <tr>
                                    <td>#281209</td>
                                    <td>7 July, 2023</td>
                                    <td>₹1,278.23</td>
                                    <td>₹22</td>
                                </tr>
                                <tr>
                                    <td>#281209</td>
                                    <td>7 July, 2023</td>
                                    <td>₹1,278.23</td>
                                    <td>₹22</td>
                                </tr>
                                <tr>
                                    <td>#281209</td>
                                    <td>7 July, 2023</td>
                                    <td>₹1,278.23</td>
                                    <td>₹22</td>
                                </tr>
                                <tr>
                                    <td>#281209</td>
                                    <td>7 July, 2023</td>
                                    <td>₹1,278.23</td>
                                    <td>₹22</td>
                                </tr>

                            </table>
                        </div>
                        <div className={styles.paginationBox}>
                            <div className={styles.paginationPrevious}>
                                <img src={left} alt='left' className={styles.paginationIcon} />
                                <div className={styles.previousText}>Previous</div>
                            </div>
                            <div className={styles.pageNumber}>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>1</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>...</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberTextTen}>10</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>11</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>12</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>13</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>14</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>15</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>16</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>17</div>
                                </div>
                                <div className={styles.individualComponent}>
                                    <div className={styles.pageNumberText}>18</div>
                                </div>
                            </div>
                            <div className={styles.paginationNext}>
                                <div className={styles.previousText}>Next</div>
                                <img src={right} alt='left' className={styles.paginationIcon} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

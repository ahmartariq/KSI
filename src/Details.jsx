import { useState, useEffect } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { Pagination } from "./components/Pagination"


const data = [
    {
        item: "PD0001 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0002 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0003 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0004 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0005 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0001 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0001 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
    {
        item: "PD0001 -> Gerber, Lil' Crunchies, Crawler, Mild Cheddar, 1.48 oz (42 g)",
        description: "Crawler, Mild Cheddar, 1.48 oz (42 g)",
        quantity: "5,000.00",
        price: 3.20,
        discount: "5.00%",
        net: '15.200.00',
        tax: 'Standard Rate(5.00%)'
    },
]

function Details() {

    return (
        <div className="bg-[#fff] w-full pt-0 mt-0 pb-[3px] min-w-[960px]">
            <div className=" pt-[1.66rem] px-[1.66667rem]">
                <div className="max-w-[1240px]">
                    <div className="flex flex-wrap mx-[-10px]">
                        <div className="flex-grow max-w-full relative w-full min-h-[1px] px-[10px]" style={{ flexBasis: 0 }}>
                            <div className="flex flex-wrap mx-[-10px]">
                                <div className="max-w-[33.33333%] relative w-full min-h-[1px] px-[10px]" style={{ flex: '0 0 33.33333%' }}>
                                    <div className="mb-[1.5rem] w-full">
                                        <div className="w-full flex justify-between">
                                            <span className="min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                customer
                                            </span>
                                            <span className="min-h-[13px] text-[0.75rem] font-medium text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Balance:
                                                <span className="cursor-pointer inline font-medium text-[#1071e3] hover:text-[#0d59b3]">388,200.03 </span>
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                <span className="text-[#1071e3] cursor-pointer hover:text-[#0d59b3]">Mcallister & Murphy Pc</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] relative w-full min-h-[1px] px-[10px]" style={{ flex: '0 0 33.33333%' }}>
                                    <div className="flex wrap mx-[-10px]">
                                        <div className="max-w-[50%] relative w-full min-h-[1px] px-[10px]" style={{ flex: "0 0 50%" }}>
                                            <div className="w-full">
                                                <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                    DATE:
                                                </span>
                                            </div>
                                            <div className="w-full min-h-[2.5rem]">
                                                <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                    Apr 14, 2022
                                                </div>
                                            </div>
                                        </div>
                                        <div className="max-w-[50%] relative w-full min-h-[1px] px-[10px]" style={{ flex: "0 0 50%" }}>
                                            <div className="w-full">
                                                <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                    VALID DATE:
                                                </span>
                                            </div>
                                            <div className="w-full min-h-[2.5rem]">
                                                <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                    May 13, 2022
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] relative w-full min-h-[1px] px-[10px]" style={{ flex: '0 0 33.33333%' }}>
                                    <div className="flex wrap mx-[-10px] flex-col">
                                        <div className="max-w-[50%] relative w-full min-h-[1px] px-[10px] mb-[2rem]" style={{ flex: "0 0 50%" }}>
                                            <div className="w-full">
                                                <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                    QUOTE#
                                                </span>
                                            </div>
                                            <div className="w-full min-h-[2.5rem]">
                                                <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                    SQ0014
                                                </div>
                                            </div>
                                        </div>
                                        <div className="max-w-[50%] relative w-full min-h-[1px] px-[10px]" style={{ flex: "0 0 50%" }}>
                                            <div className="w-full">
                                                <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                    MANAGER:
                                                </span>
                                            </div>
                                            <div className="w-full min-h-[2.5rem]">
                                                <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                    Kim Soo
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[1.2rem]">
                    <div className="mt-[40px] mx-[-1.66667rem] overflow-x-auto">
                        <table className="w-full table" style={{ borderSpacing: "0 5px", borderCollapse: 'unset' }}>
                            <colgroup>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td className="pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">ITEM</div>
                                    </td>
                                    <td className="pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">DESCRIPTION</div>
                                    </td>
                                    <td className="text-right pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">QUANTITY</div>
                                    </td>
                                    <td className="text-right pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">PRICE</div>
                                    </td>
                                    <td className="text-right pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">DISCOUNT</div>
                                    </td>
                                    <td className="text-right pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">NET AMOUNT</div>
                                    </td>
                                    <td className="pl-[19px] pr-[10px] h-[2.5rem] leading-[1.2] pb-[12px]">
                                        <div className="uppercase font-sans text-[0.66667rem] px-[5px] overflow-hidden text-ellipsis whitespace-nowrap">TAX RATE</div>
                                    </td>
                                </tr>
                                {
                                    data.map(d => (
                                        <tr>
                                            <td className="w-[23%] pl-[19px] pr-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-left w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.item}
                                                </div>
                                            </td>
                                            <td className="px-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-left w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.description}
                                                </div>
                                            </td>
                                            <td className="text-right px-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-right w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.price}
                                                </div>
                                            </td>
                                            <td className="text-right px-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-right w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.quantity}
                                                </div>
                                            </td>
                                            <td className="text-right px-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-right w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.discount}
                                                </div>
                                            </td>
                                            <td className="text-right px-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-right w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.net}
                                                </div>
                                            </td>
                                            <td className="px-[10px] h-[2.5rem] bg-[#F6F7F9] relative">
                                                <div className="text-left w-full after:content-[''] after:block after:border-r border-r-[#e8e8e8] after:absolute after:right-0 after:top-[5px] after:bottom-[5px]">
                                                    {d.tax}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mb-[5.5rem]">
                    <div className="flex-nowrap flex mx-[-10px]">
                        <div className="max-w-full flex-grow w-full relative min-h-[1px] px-[10px] " style={{ flexBasis: 0 }}></div>
                        <div className="ml-[8.33333%] w-auto max-w-none relative min-h-[1px] px-[10px]" style={{ flex: "0 0 auto" }}>
                            <div className="min-w-[248.89px]">
                                <table className="w-full table">
                                    <tbody className="min-w-[248.89px] w-[248.89px]">
                                        <tr>
                                            <th className="w-[55%] font-normal py-[8px] align-top text-right">
                                                <div>Subtotal</div>
                                            </th>
                                            <th className="w-[45%] font-normal py-[8px] align-top text-right">
                                                <div>241,870.00</div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="font-normal py-[8px] align-top text-right">
                                                <div>Discount</div>
                                            </th>
                                            <th className="font-normal py-[8px] align-top text-right">
                                                <div>12,093.50</div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="font-normal py-[8px] align-top text-right">
                                                <div>Standard Rate(5.00%)</div>
                                            </th>
                                            <th className="font-normal py-[8px] align-top text-right">
                                                <div>11,488.83</div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="float-right w-full after:content-[''] after:h-[3px] after:mt-[-3px] after:border-t after:border-t-[#1D252C] after:border-b after:border-b-[#1D252C] after:border-dashed after:absolute after:w-[90%] after:left-[50%] after:ml-[-45%]">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="font-bold text-[1.1rem] py-[8px] align-top text-right">
                                                    <div>Total (USD)</div>
                                                </th>
                                                <th className="w-[120px] pl-[15px]  font-bold text-[1.1rem] py-[8px] align-top text-right">
                                                    <div>241,265.33</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="hidden"></tbody>
                                        <tfoot className="before:border-t before:border-t-[#1D252C] before:border-dashed before:content-[''] before:absolute before:w-[90%] before:left-[50%] before:ml-[-45%]">
                                            <tr>
                                                <th className="font-bold text-[1.1rem] py-[8px] align-top text-right">
                                                    <div>Due Amount</div>
                                                </th>
                                                <th className="w-[120px] pl-[15px]  font-bold text-[1.1rem] py-[8px] align-top text-right">
                                                    <div>241,265.33</div>
                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full pl-[20px] pr-[10px] flex flex-row h-[59.2px] justify-start items-center  bg-[#eceff3] m-0 p-0 border-none">
                <div className="flex items-center flex-row justify-between w-full">
                    <div className="flex flex-row gap-x-[30px]">
                        <div className="flex flex-col cursor-pointer ">
                            <span className="min-w-[20px] h-[20px] flex justify-center items-center">
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20V1.5C0 1.11667 0.15 0.770833 0.45 0.4625C0.75 0.154167 1.1 0 1.5 0H18.5C18.8833 0 19.2292 0.154167 19.5375 0.4625C19.8458 0.770833 20 1.11667 20 1.5V14.5C20 14.8833 19.8458 15.2292 19.5375 15.5375C19.2292 15.8458 18.8833 16 18.5 16H4L0 20ZM1.5 16.375L3.375 14.5H18.5V1.5H1.5V16.375Z" fill="currentColor" /></svg>
                            </span>
                            <div>History & Notes</div>
                        </div>
                        <div className="flex flex-col cursor-pointer">
                            <span className="min-w-[20px] h-[20px] flex justify-center items-center pb-[3px]">
                                <svg width="15" height="20" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 25C1.375 25 0.9375 24.8125 0.5625 24.4375C0.1875 24.0625 0 23.625 0 23.125V1.875C0 1.375 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.375 0 1.875 0H13.1562L20 6.84375V23.125C20 23.625 19.8125 24.0625 19.4375 24.4375C19.0625 24.8125 18.625 25 18.125 25H1.875ZM12.2187 7.6875V1.875H1.875V23.125H18.125V7.6875H12.2187Z" fill="currentColor" /></svg>
                            </span>
                            <div className="">Introduction</div>
                        </div>
                        <div className="flex flex-col cursor-pointer">
                            <span className="min-w-[20px] h-[20px] flex justify-center items-center">
                                <svg width="18" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.77273 14.5227C3.4697 14.5227 2.34848 14.053 1.40909 13.1136C0.469697 12.1742 0 11.053 0 9.75C0 8.56818 0.375 7.52652 1.125 6.625C1.875 5.72348 2.84091 5.18182 4.02273 5C4.32576 3.5303 5.03788 2.32955 6.15909 1.39773C7.2803 0.465909 8.57576 0 10.0455 0C11.7576 0 13.1932 0.617424 14.3523 1.85227C15.5114 3.08712 16.0909 4.56818 16.0909 6.29545V6.84091C17.1818 6.81061 18.1061 7.16288 18.8636 7.89773C19.6212 8.63258 20 9.56061 20 10.6818C20 11.7273 19.6212 12.6288 18.8636 13.3864C18.1061 14.1439 17.2045 14.5227 16.1591 14.5227H10.6818C10.3182 14.5227 10 14.3864 9.72727 14.1136C9.45455 13.8409 9.31818 13.5227 9.31818 13.1591V7.29545L7.43182 9.18182L6.45455 8.20455L10 4.65909L13.5455 8.20455L12.5682 9.18182L10.6818 7.29545V13.1591H16.1591C16.8409 13.1591 17.4242 12.9167 17.9091 12.4318C18.3939 11.947 18.6364 11.3636 18.6364 10.6818C18.6364 10 18.3939 9.41667 17.9091 8.93182C17.4242 8.44697 16.8409 8.20455 16.1591 8.20455H14.7273V6.29545C14.7273 4.94697 14.2689 3.78788 13.3523 2.81818C12.4356 1.84848 11.303 1.36364 9.95455 1.36364C8.60606 1.36364 7.4697 1.84848 6.54545 2.81818C5.62121 3.78788 5.15909 4.94697 5.15909 6.29545H4.72727C3.78788 6.29545 2.99242 6.625 2.34091 7.28409C1.68939 7.94318 1.36364 8.75758 1.36364 9.72727C1.36364 10.6667 1.69697 11.4735 2.36364 12.1477C3.0303 12.822 3.83333 13.1591 4.77273 13.1591H7.95455V14.5227H4.77273Z" fill="currentColor" /></svg>
                            </span>
                            <div>Attachments</div>
                        </div>
                        <div className="relative flex flex-col cursor-pointer">
                            <span className="min-w-[20px] h-[20px] flex justify-center items-center">
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.25 10H5C3.61667 10 2.4375 9.5125 1.4625 8.5375C0.4875 7.5625 0 6.38333 0 5C0 3.61667 0.4875 2.4375 1.4625 1.4625C2.4375 0.4875 3.61667 0 5 0H9.25V1.5H5C4.03333 1.5 3.20833 1.84167 2.525 2.525C1.84167 3.20833 1.5 4.03333 1.5 5C1.5 5.96667 1.84167 6.79167 2.525 7.475C3.20833 8.15833 4.03333 8.5 5 8.5H9.25V10ZM6.125 5.75V4.25H13.875V5.75H6.125ZM10.75 10V8.5H15C15.9667 8.5 16.7917 8.15833 17.475 7.475C18.1583 6.79167 18.5 5.96667 18.5 5C18.5 4.03333 18.1583 3.20833 17.475 2.525C16.7917 1.84167 15.9667 1.5 15 1.5H10.75V0H15C16.3833 0 17.5625 0.4875 18.5375 1.4625C19.5125 2.4375 20 3.61667 20 5C20 6.38333 19.5125 7.5625 18.5375 8.5375C17.5625 9.5125 16.3833 10 15 10H10.75Z" fill="currentColor" /></svg>
                            </span>
                            <div>Links</div>
                            <span className="absolute right-[-20px] rounded-[40%] top-0 px-[8px] py-[1px] text-white bg-black text-[9px]">1</span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse pr-[80px] gap-x-[15px]">
                        <div className="hover:cursor-pointer opacity-70 hover:opacity-100 rounded-[50%] flex items-center text-center justify-center min-w-[30px] h-[30px] bg-[#2bbf57] border-[#2bbf57] hover:bg-[#229544] hover:border-[#229544]">
                            <span className="items-center text-center justify-center  text-white">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15V1.125C0 0.8375 0.1125 0.578125 0.3375 0.346875C0.5625 0.115625 0.825 0 1.125 0H13.875C14.1625 0 14.4219 0.115625 14.6531 0.346875C14.8844 0.578125 15 0.8375 15 1.125V10.875C15 11.1625 14.8844 11.4219 14.6531 11.6531C14.4219 11.8844 14.1625 12 13.875 12H3L0 15Z" fill="currentColor"/></svg>
                            </span>
                        </div>
                        <div className="bg-[#1071e3] cursor-pointer hover:bg-[#093f7f] border border-solid border-[black] border-opacity-25 flex justify-center items-center  px-[8px] rounded-sm">
                            <div className=" flex px-[14px] relative after:content-[''] after:absolute after:bg-[#9e9e9e7e] after:h-full h-full after:w-[1px] after:r-[-100px] after:bottom-0 after:ml-[100px]">
                                <div className="text-white flex items-center justify-center pd-[15px] pr-[8px]">Save & Approve</div>
                            </div>
                            <div className="text-white">
                            <svg width="15" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.08333 3 0.729167 2.85417 0.4375 2.5625C0.145833 2.27083 0 1.91667 0 1.5C0 1.08333 0.145833 0.729166 0.4375 0.437499C0.729167 0.145833 1.08333 0 1.5 0C1.91667 0 2.27083 0.145833 2.5625 0.437499C2.85417 0.729166 3 1.08333 3 1.5C3 1.91667 2.85417 2.27083 2.5625 2.5625C2.27083 2.85417 1.91667 3 1.5 3ZM10 3C9.58333 3 9.22917 2.85417 8.9375 2.5625C8.64583 2.27083 8.5 1.91667 8.5 1.5C8.5 1.08333 8.64583 0.729166 8.9375 0.437499C9.22917 0.145833 9.58333 0 10 0C10.4167 0 10.7708 0.145833 11.0625 0.437499C11.3542 0.729166 11.5 1.08333 11.5 1.5C11.5 1.91667 11.3542 2.27083 11.0625 2.5625C10.7708 2.85417 10.4167 3 10 3ZM18.5 3C18.0833 3 17.7292 2.85417 17.4375 2.5625C17.1458 2.27083 17 1.91667 17 1.5C17 1.08333 17.1458 0.729166 17.4375 0.437499C17.7292 0.145833 18.0833 0 18.5 0C18.9167 0 19.2708 0.145833 19.5625 0.437499C19.8542 0.729166 20 1.08333 20 1.5C20 1.91667 19.8542 2.27083 19.5625 2.5625C19.2708 2.85417 18.9167 3 18.5 3Z" fill="currentColor"/></svg>
                            </div>
                        </div>
                        <div className="hover:bg-[#f7f9fa] cursor-pointer border border-solid border-[black] border-opacity-25 flex justify-center items-center bg-[white] px-[8px] rounded-sm">
                            <div className="flex px-[14px] relative after:content-[''] after:absolute after:bg-[#9e9e9e7e] after:h-full h-full after:w-[1px] after:r-[-100px] after:bottom-0 after:ml-[70px]">
                                <div className="flex items-center justify-center pd-[15px] pr-[8px]">Print PDF</div>
                            </div>
                            <div>
                            <svg width="15" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.08333 3 0.729167 2.85417 0.4375 2.5625C0.145833 2.27083 0 1.91667 0 1.5C0 1.08333 0.145833 0.729166 0.4375 0.437499C0.729167 0.145833 1.08333 0 1.5 0C1.91667 0 2.27083 0.145833 2.5625 0.437499C2.85417 0.729166 3 1.08333 3 1.5C3 1.91667 2.85417 2.27083 2.5625 2.5625C2.27083 2.85417 1.91667 3 1.5 3ZM10 3C9.58333 3 9.22917 2.85417 8.9375 2.5625C8.64583 2.27083 8.5 1.91667 8.5 1.5C8.5 1.08333 8.64583 0.729166 8.9375 0.437499C9.22917 0.145833 9.58333 0 10 0C10.4167 0 10.7708 0.145833 11.0625 0.437499C11.3542 0.729166 11.5 1.08333 11.5 1.5C11.5 1.91667 11.3542 2.27083 11.0625 2.5625C10.7708 2.85417 10.4167 3 10 3ZM18.5 3C18.0833 3 17.7292 2.85417 17.4375 2.5625C17.1458 2.27083 17 1.91667 17 1.5C17 1.08333 17.1458 0.729166 17.4375 0.437499C17.7292 0.145833 18.0833 0 18.5 0C18.9167 0 19.2708 0.145833 19.5625 0.437499C19.8542 0.729166 20 1.08333 20 1.5C20 1.91667 19.8542 2.27083 19.5625 2.5625C19.2708 2.85417 18.9167 3 18.5 3Z" fill="currentColor"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Details

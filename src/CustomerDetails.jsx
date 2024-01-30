import { useState, useEffect } from "react"
import { Link, NavLink, useOutletContext } from "react-router-dom"
import { Pagination } from "./components/Pagination"


const tabs = [
    {
        title: "Summary",
        notification: 0
    },
    {
        title: 'Opportunities',
        notification: 0
    },
    {
        title: "Sales Quote",
        notification: 0
    },
    {
        title: "Sale Invoices",
        notification: 5
    },
    {
        title: "Contact",
        notification: 1
    },
    {
        title: "projects",
        notification: 3
    },
    {
        title: "Cases",
        notification: 7
    },
    {
        title: "Activities",
        notification: 9
    },
    {
        title: "SOA",
        notification: 5
    }
]

function CustomerDetails() {
    const [select, setSelect] = useState(tabs[0].title)
    const [collapse, setCollapse] = useState(false)
    const [collapse1, setCollapse1] = useState(true)
    const [collapse2, setCollapse2] = useState(true)
    const [collapse3, setCollapse3] = useState(true)
    const [collapse4, setCollapse4] = useState(true)

    return (
        <div className="pt-0 mt-0 pb-[60px] min-w-[960px] min-h-[100vh] bg-[#fff]">
            <div className="flex pr-[1.25rem] justify-between items-center pl-[1.66667rem] py-[1.25rem] ">
                <div className="h-[2.5rem] relative ">
                    <div className="flex items-center p-0 flex-shrink-0 rounded-[3px] border border-[#8d9ba8]">
                        <ul className="w-full justify-start items-center whitespace-normal bg-transparent flex relative my-0 mx-auto p-0 ">
                            {
                                tabs.map(tab => (
                                    tab.notification == 0 ?
                                        <li onClick={() => setSelect(tab.title)} className="h-full relative overflow-visible leading-[1.2] w-auto whitespace-nowrap items-center p-0 m-0 text-ellipsis list-none">
                                            <Link className={`${select === tab.title ? "text-[#fff] cursor-default after:top-[-1px] after:bottom-[-1px] after:left-[-1px] after:right-[-1px] after:opacity-100 after:bg-[#8d9ba8]" : "text-[#536677] cursor-pointer after:top-[1px] after:bottom-[1px] after:left-[50%] after:right-[50%]"}
                                relative block pt-[6px] pb-[8px] px-[10px] overflow-visible font-medium h-full text-ellipsis z-10
                                    after:content-[''] after:rounded-tl-[3px] after:-z-10  after:rounded-bl-[3px] after:absolute
                                    before:content-[''] before:absolute before:-z-10 before:top-[4px]  before:bottom-[4px]  before:right-0  before:w-[1px] before:bg-[#ced5db]`}
                                                style={{ transition: "color .28s ease, left 0.2s ease, right 0.2s ease, background-color .2s ease" }} to="/customer">
                                                {tab.title}
                                                <span></span>
                                            </Link>
                                        </li>
                                        :
                                        <li onClick={() => setSelect(tab.title)} className="h-full relative overflow-visible leading-[1.2] w-auto whitespace-nowrap items-center p-0 m-0 text-ellipsis list-none">
                                            <Link className={`${select === tab.title ? "text-[#fff] cursor-default after:top-[-1px] after:bottom-[-1px] after:left-[-1px] after:right-[-1px] after:opacity-100 after:bg-[#8d9ba8]" : "text-[#536677] cursor-pointer after:top-[1px] after:bottom-[1px] after:left-[50%] after:right-[50%]"}
                                relative block pt-[6px] pb-[8px] px-[10px] overflow-visible font-medium h-full text-ellipsis z-10
                                    after:content-[''] after:rounded-tl-[3px] after:-z-10  after:rounded-bl-[3px] after:absolute
                                    before:content-[''] before:absolute before:-z-10 before:top-[4px]  before:bottom-[4px]  before:right-0  before:w-[1px] before:bg-[#ced5db]`}
                                                style={{ transition: "color .28s ease, left 0.2s ease, right 0.2s ease, background-color .2s ease" }} to="/customer">
                                                {tab.title}
                                                <span className="leading-[1.1] absolute top-[-10px] left-[50%] ml-[-11px] inline-block py-[4px] px-[5px] rounded-[5px] text-[0.9rem] flex-grow-0 bg-[#536677] text-white">
                                                    {tab.notification}
                                                </span>
                                            </Link>
                                        </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-full ">
                <ul className="pt-0 mt-0 relative py-[10px] px-0 mb-[1rem] list-none">
                    <li>
                        <div onClick={() => setCollapse(!collapse)} className="py-[1.25rem] px-[2.5rem] relative cursor-pointer uppercase flex flex-row  items-center">
                            <span className="mr-[1.5rem]">
                                <svg className={` ${collapse ? "rotate-180" : ""}`} width="15" height="9" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.728676 16.2695C1.12112 16.6388 1.58283 16.8293 2.11379 16.8408C2.64475 16.8524 3.10646 16.6619 3.49891 16.2695L13.9912 5.77721L24.4834 16.2695C24.8528 16.6388 25.3087 16.835 25.8512 16.8581C26.3937 16.8812 26.8612 16.6965 27.2536 16.3041C27.6461 15.9347 27.8481 15.473 27.8596 14.919C27.8712 14.3649 27.6807 13.9032 27.2883 13.5339L15.1339 1.34484C14.9723 1.18325 14.7934 1.06205 14.5971 0.981251C14.4009 0.900453 14.1989 0.860054 13.9912 0.860054C13.7834 0.860054 13.5814 0.900453 13.3852 0.981251C13.1889 1.06205 13.01 1.18325 12.8484 1.34484L0.694048 13.4992C0.324684 13.8686 0.139999 14.3245 0.139999 14.867C0.139999 15.4095 0.336226 15.877 0.728676 16.2695Z" fill="currentColor" /></svg>
                            </span>
                            <span className="font-normal text-[1.25rem] text-[#536677]">
                                ACCOUNT INFORMATION
                            </span>
                        </div>
                        <div className={` ${collapse ? "hidden" : "block"} block px-[2.5rem] border-b-[1px] border-solid border-[#ced5db]`}>
                            <div className="flex flex-wrap mx-[-10px] ">
                                <div className="max-w-[50%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 50%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Number:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="">
                                                CUS_0010
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                OWNERS:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="">
                                                Alex Ferguson
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                NAME:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="">
                                                Upper Deck Co
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                INDUSTRY:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="">
                                                Chemical
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[50%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 50%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Phone:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="flex items-center">
                                                <div className="flex justify-center items-center w-[26px] h-[26px] leading-[31px] text-center rounded-[50%] mr-[10px] cursor-pointer text-[#73cf19] flex-shrink-0 bg-[#8d9ba833] hover:bg-[#73cf19] hover:text-white" style={{ transition: "all 0.2s ease-out 0s" }} >
                                                    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15V1.125C0 0.8375 0.1125 0.578125 0.3375 0.346875C0.5625 0.115625 0.825 0 1.125 0H13.875C14.1625 0 14.4219 0.115625 14.6531 0.346875C14.8844 0.578125 15 0.8375 15 1.125V10.875C15 11.1625 14.8844 11.4219 14.6531 11.6531C14.4219 11.8844 14.1625 12 13.875 12H3L0 15Z" fill="currentColor" /></svg>
                                                </div>
                                                <div className="rounded-[5px] overflow-hidden ">
                                                    <a className="hover:bg-[#007de7] hover:text-white flex flex-row items-center leading-[1.2] rounded-[30px] py-[5px] px-[8px] overflow-hidden text-ellipsis bg-[#8d9ba833] text-[#1071e3] cursor-pointer" style={{ transition: 'all 0.2s ease-out 0s' }}>
                                                        <span className="mr-[5px] text-[16px] align-middle">
                                                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 20C16.4907 20 14.2454 19.4444 12.0139 18.3333C9.78241 17.2222 7.77778 15.7778 6 14C4.22222 12.2222 2.77778 10.2176 1.66667 7.98611C0.555556 5.75463 0 3.50926 0 1.25C0 0.898148 0.12037 0.601852 0.361111 0.361111C0.601852 0.12037 0.898148 0 1.25 0H5.13889C5.39815 0 5.625 0.0879629 5.81944 0.263889C6.01389 0.439815 6.13889 0.675926 6.19444 0.972222L6.94444 4.47222C6.98148 4.73148 6.97685 4.96759 6.93056 5.18056C6.88426 5.39352 6.78704 5.57407 6.63889 5.72222L3.86111 8.52778C4.89815 10.25 6.06019 11.75 7.34722 13.0278C8.63426 14.3056 10.0926 15.3889 11.7222 16.2778L14.3611 13.5556C14.5463 13.3519 14.7593 13.2083 15 13.125C15.2407 13.0417 15.4815 13.0278 15.7222 13.0833L19.0278 13.8056C19.3056 13.8611 19.537 14 19.7222 14.2222C19.9074 14.4444 20 14.7037 20 15V18.75C20 19.1019 19.8796 19.3981 19.6389 19.6389C19.3981 19.8796 19.1019 20 18.75 20Z" fill="currentColor" /></svg>
                                                        </span>
                                                        <span className="text-[1.1rem] inline align-middle">
                                                            +971 52 839 0948
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                E-MAIL::
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="text-[#0d59b3]">
                                                beth@upperdeck.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-medium text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                WEBSITE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="text-[#0d59b3]">
                                                www.upperdeck.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                FAX:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="">
                                                +971 2 390 8490
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setCollapse1(!collapse1)} className="py-[1.25rem] px-[2.5rem] relative cursor-pointer uppercase flex flex-row  items-center">
                            <span className="mr-[1.5rem]">
                                <svg className={` ${collapse1 ? "rotate-180" : ""}`} width="15" height="9" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.728676 16.2695C1.12112 16.6388 1.58283 16.8293 2.11379 16.8408C2.64475 16.8524 3.10646 16.6619 3.49891 16.2695L13.9912 5.77721L24.4834 16.2695C24.8528 16.6388 25.3087 16.835 25.8512 16.8581C26.3937 16.8812 26.8612 16.6965 27.2536 16.3041C27.6461 15.9347 27.8481 15.473 27.8596 14.919C27.8712 14.3649 27.6807 13.9032 27.2883 13.5339L15.1339 1.34484C14.9723 1.18325 14.7934 1.06205 14.5971 0.981251C14.4009 0.900453 14.1989 0.860054 13.9912 0.860054C13.7834 0.860054 13.5814 0.900453 13.3852 0.981251C13.1889 1.06205 13.01 1.18325 12.8484 1.34484L0.694048 13.4992C0.324684 13.8686 0.139999 14.3245 0.139999 14.867C0.139999 15.4095 0.336226 15.877 0.728676 16.2695Z" fill="currentColor" /></svg>
                            </span>
                            <span className="font-normal text-[1.25rem] text-[#536677]">FIXED ASSET INFORMATION</span>
                        </div>
                        <div className={` ${collapse1 ? "hidden" : "block"} block px-[2.5rem] border-b-[1px] border-solid border-[#ced5db]`}>
                            <div className="flex flex-wrap mx-[-10px] ">
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Name:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002 AOCHI FREEZERS TRADE ASSURANCE
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                COST:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                3,800.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                PURCHASE DATE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Oct 09, 2020
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                USEFUL LIFE (IN YEARS):
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                10.00000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                CATEGORY:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Plant and Machinery
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                OWNER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Alex Ferguson:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                AMOUNTS:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Tax Exclusive
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                TAX:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Standard Rate(5.00%)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                RESIDUAL VALUE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                600.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                NUMBER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002
                                            </div>
                                        </div>
                                    </div>     <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                DESCRIPTION:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-h-[2.5rem]">
                                        <img src="" alt="" className="w-[200px] h-[200px] border-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setCollapse2(!collapse2)} className="py-[1.25rem] px-[2.5rem] relative cursor-pointer uppercase flex flex-row  items-center">
                            <span className="mr-[1.5rem]">
                                <svg className={` ${collapse2 ? "rotate-180" : ""}`} width="15" height="9" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.728676 16.2695C1.12112 16.6388 1.58283 16.8293 2.11379 16.8408C2.64475 16.8524 3.10646 16.6619 3.49891 16.2695L13.9912 5.77721L24.4834 16.2695C24.8528 16.6388 25.3087 16.835 25.8512 16.8581C26.3937 16.8812 26.8612 16.6965 27.2536 16.3041C27.6461 15.9347 27.8481 15.473 27.8596 14.919C27.8712 14.3649 27.6807 13.9032 27.2883 13.5339L15.1339 1.34484C14.9723 1.18325 14.7934 1.06205 14.5971 0.981251C14.4009 0.900453 14.1989 0.860054 13.9912 0.860054C13.7834 0.860054 13.5814 0.900453 13.3852 0.981251C13.1889 1.06205 13.01 1.18325 12.8484 1.34484L0.694048 13.4992C0.324684 13.8686 0.139999 14.3245 0.139999 14.867C0.139999 15.4095 0.336226 15.877 0.728676 16.2695Z" fill="currentColor" /></svg>
                            </span>
                            <span className="font-normal text-[1.25rem] text-[#536677]">FIXED ASSET INFORMATION</span>
                        </div>
                        <div className={` ${collapse2 ? "hidden" : "block"} block px-[2.5rem] border-b-[1px] border-solid border-[#ced5db]`}>
                            <div className="flex flex-wrap mx-[-10px] ">
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Name:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002 AOCHI FREEZERS TRADE ASSURANCE
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                COST:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                3,800.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                PURCHASE DATE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Oct 09, 2020
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                USEFUL LIFE (IN YEARS):
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                10.00000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                CATEGORY:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Plant and Machinery
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                OWNER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Alex Ferguson:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                AMOUNTS:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Tax Exclusive
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                TAX:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Standard Rate(5.00%)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                RESIDUAL VALUE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                600.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                NUMBER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002
                                            </div>
                                        </div>
                                    </div>     <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                DESCRIPTION:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-h-[2.5rem]">
                                        <img src="" alt="" className="w-[200px] h-[200px] border-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setCollapse1(!collapse3)} className="py-[1.25rem] px-[2.5rem] relative cursor-pointer uppercase flex flex-row  items-center">
                            <span className="mr-[1.5rem]">
                                <svg className={` ${collapse3 ? "rotate-180" : ""}`} width="15" height="9" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.728676 16.2695C1.12112 16.6388 1.58283 16.8293 2.11379 16.8408C2.64475 16.8524 3.10646 16.6619 3.49891 16.2695L13.9912 5.77721L24.4834 16.2695C24.8528 16.6388 25.3087 16.835 25.8512 16.8581C26.3937 16.8812 26.8612 16.6965 27.2536 16.3041C27.6461 15.9347 27.8481 15.473 27.8596 14.919C27.8712 14.3649 27.6807 13.9032 27.2883 13.5339L15.1339 1.34484C14.9723 1.18325 14.7934 1.06205 14.5971 0.981251C14.4009 0.900453 14.1989 0.860054 13.9912 0.860054C13.7834 0.860054 13.5814 0.900453 13.3852 0.981251C13.1889 1.06205 13.01 1.18325 12.8484 1.34484L0.694048 13.4992C0.324684 13.8686 0.139999 14.3245 0.139999 14.867C0.139999 15.4095 0.336226 15.877 0.728676 16.2695Z" fill="currentColor" /></svg>
                            </span>
                            <span className="font-normal text-[1.25rem] text-[#536677]">FIXED ASSET INFORMATION</span>
                        </div>
                        <div className={` ${collapse3 ? "hidden" : "block"} block px-[2.5rem] border-b-[1px] border-solid border-[#ced5db]`}>
                            <div className="flex flex-wrap mx-[-10px] ">
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Name:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002 AOCHI FREEZERS TRADE ASSURANCE
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                COST:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                3,800.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                PURCHASE DATE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Oct 09, 2020
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                USEFUL LIFE (IN YEARS):
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                10.00000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                CATEGORY:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Plant and Machinery
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                OWNER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Alex Ferguson:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                AMOUNTS:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Tax Exclusive
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                TAX:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Standard Rate(5.00%)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                RESIDUAL VALUE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                600.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                NUMBER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002
                                            </div>
                                        </div>
                                    </div>     <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                DESCRIPTION:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-h-[2.5rem]">
                                        <img src="" alt="" className="w-[200px] h-[200px] border-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onClick={() => setCollapse2(!collapse4)} className="py-[1.25rem] px-[2.5rem] relative cursor-pointer uppercase flex flex-row  items-center">
                            <span className="mr-[1.5rem]">
                                <svg className={` ${collapse4 ? "rotate-180" : ""}`} width="15" height="9" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.728676 16.2695C1.12112 16.6388 1.58283 16.8293 2.11379 16.8408C2.64475 16.8524 3.10646 16.6619 3.49891 16.2695L13.9912 5.77721L24.4834 16.2695C24.8528 16.6388 25.3087 16.835 25.8512 16.8581C26.3937 16.8812 26.8612 16.6965 27.2536 16.3041C27.6461 15.9347 27.8481 15.473 27.8596 14.919C27.8712 14.3649 27.6807 13.9032 27.2883 13.5339L15.1339 1.34484C14.9723 1.18325 14.7934 1.06205 14.5971 0.981251C14.4009 0.900453 14.1989 0.860054 13.9912 0.860054C13.7834 0.860054 13.5814 0.900453 13.3852 0.981251C13.1889 1.06205 13.01 1.18325 12.8484 1.34484L0.694048 13.4992C0.324684 13.8686 0.139999 14.3245 0.139999 14.867C0.139999 15.4095 0.336226 15.877 0.728676 16.2695Z" fill="currentColor" /></svg>
                            </span>
                            <span className="font-normal text-[1.25rem] text-[#536677]">FIXED ASSET INFORMATION</span>
                        </div>
                        <div className={` ${collapse4 ? "hidden" : "block"} block px-[2.5rem] border-b-[1px] border-solid border-[#ced5db]`}>
                            <div className="flex flex-wrap mx-[-10px] ">
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                Name:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002 AOCHI FREEZERS TRADE ASSURANCE
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                COST:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                3,800.00
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                PURCHASE DATE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Oct 09, 2020
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                USEFUL LIFE (IN YEARS):
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                10.00000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                CATEGORY:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Plant and Machinery
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                OWNER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Alex Ferguson:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                AMOUNTS:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Tax Exclusive
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                TAX:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                Standard Rate(5.00%)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                RESIDUAL VALUE:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                600.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[33.33333%] px-[10px] before:content-[''] before:border-t before:border-solid before:border-[#e8e8e8] before:block before:h-[1.66667rem]" style={{ flex: "0 0 33.33333%" }}>
                                    <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                NUMBER:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                                FA0002
                                            </div>
                                        </div>
                                    </div>     <div className="mb-[1.8rem] w-full">
                                        <div className="w-full">
                                            <span className="w-full min-h-[13px] font-normal text-[0.75rem] text-[#1D252C] block mb-[0.5rem] uppercase">
                                                DESCRIPTION:
                                            </span>
                                        </div>
                                        <div className="w-full min-h-[2.5rem]">
                                            <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis text-[1rem] text-[#1D252C] px-[0.76923rem] py-[0.375rem] border-[0.08333rem] border-[#C4D0DA] h-[2.5rem] bg-[#fff] ">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="min-h-[2.5rem]">
                                        <img src="" alt="" className="w-[200px] h-[200px] border-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
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

export default CustomerDetails

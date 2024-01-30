import { useState, useEffect } from "react"
import { Link, useOutletContext } from "react-router-dom"
import { Pagination } from "./components/Pagination"


function Information() {
    const selectedNav = useOutletContext()
    const [collapse, setCollapse] = useState(false)
    const [collapse1, setCollapse1] = useState(true)
    const [collapse2, setCollapse2] = useState(true)

    return (
        <div className="pt-0 mt-0 pb-0 min-w-[960px]">
            <ul>
                <li>
                    <div onClick={() => setCollapse(!collapse)} className="py-[1.25rem] px-[2.5rem] relative cursor-pointer uppercase flex flex-row  items-center">
                        <span className="mr-[1.5rem]">
                            <svg className={` ${collapse ? "rotate-180" : ""}`} width="15" height="9" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.728676 16.2695C1.12112 16.6388 1.58283 16.8293 2.11379 16.8408C2.64475 16.8524 3.10646 16.6619 3.49891 16.2695L13.9912 5.77721L24.4834 16.2695C24.8528 16.6388 25.3087 16.835 25.8512 16.8581C26.3937 16.8812 26.8612 16.6965 27.2536 16.3041C27.6461 15.9347 27.8481 15.473 27.8596 14.919C27.8712 14.3649 27.6807 13.9032 27.2883 13.5339L15.1339 1.34484C14.9723 1.18325 14.7934 1.06205 14.5971 0.981251C14.4009 0.900453 14.1989 0.860054 13.9912 0.860054C13.7834 0.860054 13.5814 0.900453 13.3852 0.981251C13.1889 1.06205 13.01 1.18325 12.8484 1.34484L0.694048 13.4992C0.324684 13.8686 0.139999 14.3245 0.139999 14.867C0.139999 15.4095 0.336226 15.877 0.728676 16.2695Z" fill="currentColor" /></svg>
                        </span>
                        <span className="font-normal text-[1.25rem] text-[#536677]">FIXED ASSET INFORMATION</span>
                    </div>
                    <div className={` ${collapse ? "hidden" : "block"} block px-[2.5rem] border-b-[1px] border-solid border-[#ced5db]`}>
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
            </ul>
        </div>
    )
}

export default Information

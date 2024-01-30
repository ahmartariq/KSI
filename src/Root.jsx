import React, { createContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import App from './App';




const navData = ["Sales Quotes" , "Sales Invoices" , "Purchase Orders" , "Purchase Invoices" , "Fixed Assets" , "Expense Claims", "Customer Center" , "Supplier Center",  "Product/Services" , "Inventory Items" , "Bank Accounts" , "Stock Adjustments"]

export const AppContext = createContext();

const Root = () => {
  const [active, setActive] = useState(0)
  const [stick , setStick] = useState(false)
  const [stayStick , setStayStick] = useState(false)
  const [collapse , setCollapse] = useState(true)
  const [selectedNav , setSelectedNav] = useState(navData[0])
    const [nav, setNav] = useState([selectedNav])
  const [navActive, setNavActive] = useState(selectedNav)
  const navigate = useNavigate();
  
  const handleNavClick = (e) => {
    setActive(e)
  }

  const addNav = (name) => {
    if (!nav.includes(name)) {
      setNav([...nav, name])
    }
    setNavActive(name)
    navigate(`/details/${name}`)
  }

  useEffect(() => {
    setNav([selectedNav])

    setNavActive(selectedNav)
    console.log(nav);
    console.log(navActive);
    
  }, [selectedNav])

  const removeNav = (name) => {
    const updatedItems = nav.filter((item) => item !== name);
    // update the state with the new array
    setNav(updatedItems)
    setNavActive()
  }

  const navAnchorStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    opacity: '.6 !important',
    transition: 'opacify 0.15s ease-in-out',
  }

  return (
    <div className="relative w-full flex flex-row">
      <aside className="z-[1000] bg-background min-w-[7.08333rem] flex top-0 h-[100vh] flex-col sticky ">
        <div onMouseEnter={() => !stick ? setStick(true) : null} className="w-full flex flex-col" style={{ maxHeight: 'calc(100% - 70px)' }}>

          {/* prifile Picture  */}
          <div style={{ flex: '0 0 5.16667rem' }}>
            <div className="justify-center flex" style={{ margin: '1.66667rem 0', height: '3.75rem' }}>
              <a href="" className="cursor-pointer text-center inline-block">
                <span className={`w-[3.75rem] h-[3.75rem] inline-flex rounded-[50%] overflow-hidden justify-center items-center bg-[url('https://workforcetrack.s3.amazonaws.com/c64646/u1/f2d6765b-8042-4b61-a322-a6e18fae3390?AWSAccessKeyId=AKIAIROQMC77E5UKWBWQ&Expires=1675086499&Signature=gjQ6bJ6saoV7pYjK4mtJYOkbR38%3D')]`}>
                  <img className="z-10 relative max-w-full" src="https://workforcetrack.s3.amazonaws.com/c64646/u1/f2d6765b-8042-4b61-a322-a6e18fae3390?AWSAccessKeyId=AKIAIROQMC77E5UKWBWQ&Expires=1675086499&Signature=gjQ6bJ6saoV7pYjK4mtJYOkbR38%3D" alt="profile-picture" />
                </span>
              </a>
            </div>
          </div>

          <ul className="list-none m-0">
            <li className="pb-[1.66667rem] text-center list-item">
              <Link to={"/"} style={navAnchorStyle} >
                <svg className="text-icon hover:text-white hover:cursor-pointer" width="15" height="16" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 24.75V8.25L11 0L22 8.25V24.75H13.75V15.125H8.25V24.75H0Z" fill="currentColor" /></svg>
              </Link>
            </li>
            <li className="text-center list-item">
              <a style={navAnchorStyle} className="w-[69px] h-[69px] bg-[#5003b0] text-white p-[0.83333rem]" >
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3706 7.699V1.99529C12.3706 1.63315 12.4928 1.32986 12.7373 1.08542C12.9817 0.840972 13.285 0.71875 13.6471 0.71875H21.4422C21.8043 0.71875 22.1076 0.840972 22.3521 1.08542C22.5965 1.32986 22.7187 1.63315 22.7187 1.99529V7.699C22.7187 8.06114 22.5965 8.36443 22.3521 8.60887C22.1076 8.85332 21.8043 8.97554 21.4422 8.97554H13.6471C13.285 8.97554 12.9817 8.85332 12.7373 8.60887C12.4928 8.36443 12.3706 8.06114 12.3706 7.699ZM0.71875 11.7731V1.99529C0.71875 1.63315 0.840972 1.32986 1.08542 1.08542C1.32986 0.840972 1.63315 0.71875 1.99529 0.71875H9.79035C10.1525 0.71875 10.4558 0.840972 10.7002 1.08542C10.9447 1.32986 11.0669 1.63315 11.0669 1.99529V11.7731C11.0669 12.1352 10.9447 12.4385 10.7002 12.6829C10.4558 12.9274 10.1525 13.0496 9.79035 13.0496H1.99529C1.63315 13.0496 1.32986 12.9274 1.08542 12.6829C0.840972 12.4385 0.71875 12.1352 0.71875 11.7731ZM12.3706 21.3607V11.5829C12.3706 11.2208 12.4928 10.9175 12.7373 10.6731C12.9817 10.4286 13.285 10.3064 13.6471 10.3064H21.4422C21.8043 10.3064 22.1076 10.4286 22.3521 10.6731C22.5965 10.9175 22.7187 11.2208 22.7187 11.5829V21.3607C22.7187 21.741 22.5965 22.0533 22.3521 22.2978C22.1076 22.5422 21.8043 22.6644 21.4422 22.6644H13.6471C13.285 22.6644 12.9817 22.5422 12.7373 22.2978C12.4928 22.0533 12.3706 21.741 12.3706 21.3607ZM0.71875 21.3607V15.657C0.71875 15.2949 0.840972 14.9916 1.08542 14.7471C1.32986 14.5027 1.63315 14.3805 1.99529 14.3805H9.79035C10.1525 14.3805 10.4558 14.5027 10.7002 14.7471C10.9447 14.9916 11.0669 15.2949 11.0669 15.657V21.3607C11.0669 21.741 10.9447 22.0533 10.7002 22.2978C10.4558 22.5422 10.1525 22.6644 9.79035 22.6644H1.99529C1.63315 22.6644 1.32986 22.5422 1.08542 22.2978C0.840972 22.0533 0.71875 21.741 0.71875 21.3607Z" fill="currentColor" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">ACCOUNTS</span>
              </a>
            </li>


            <li className={`text-center list-item mt-[0.83333rem]`} onClick={() => {handleNavClick('sales') ; navigate("/quotes")}}>
              <a style={navAnchorStyle} className={`w-[69px] h-[69px] p-[0.83333rem] text-icon  hover:text-white hover:cursor-pointer ${active === 'sales' && 'active'}`}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.77869 9.52732C3.45628 9.52732 2.32923 9.05647 1.39754 8.11476C0.465847 7.17304 0 6.051 0 4.74863C0 3.44627 0.465847 2.32923 1.39754 1.39754C2.32923 0.465847 3.45628 0 4.77869 0C6.10109 0 7.22313 0.465847 8.14481 1.39754C9.06649 2.32923 9.52732 3.45628 9.52732 4.77869C9.52732 6.08106 9.06148 7.19809 8.12978 8.12978C7.19809 9.06148 6.08106 9.52732 4.77869 9.52732ZM4.77869 6.70219C5.31967 6.70219 5.7755 6.51184 6.14618 6.13115C6.51685 5.75046 6.70219 5.29964 6.70219 4.77869C6.70219 4.23771 6.51685 3.78188 6.14618 3.4112C5.7755 3.04053 5.31967 2.85519 4.77869 2.85519C4.25774 2.85519 3.80692 3.04053 3.42623 3.4112C3.04554 3.78188 2.85519 4.23771 2.85519 4.77869C2.85519 5.29964 3.04554 5.75046 3.42623 6.13115C3.80692 6.51184 4.25774 6.70219 4.77869 6.70219ZM17.2213 22C15.9189 22 14.8019 21.5342 13.8702 20.6025C12.9385 19.6708 12.4727 18.5437 12.4727 17.2213C12.4727 15.8989 12.9435 14.7769 13.8852 13.8552C14.827 12.9335 15.949 12.4727 17.2514 12.4727C18.5537 12.4727 19.6708 12.9385 20.6025 13.8702C21.5342 14.8019 22 15.9189 22 17.2213C22 18.5437 21.5342 19.6708 20.6025 20.6025C19.6708 21.5342 18.5437 22 17.2213 22ZM17.2213 19.1448C17.7623 19.1448 18.2181 18.9545 18.5888 18.5738C18.9595 18.1931 19.1448 17.7423 19.1448 17.2213C19.1448 16.6803 18.9595 16.2245 18.5888 15.8538C18.2181 15.4832 17.7623 15.2978 17.2213 15.2978C16.7004 15.2978 16.2495 15.4832 15.8689 15.8538C15.4882 16.2245 15.2978 16.6803 15.2978 17.2213C15.2978 17.7423 15.4882 18.1931 15.8689 18.5738C16.2495 18.9545 16.7004 19.1448 17.2213 19.1448ZM1.65301 20.347C1.3725 20.0665 1.23224 19.7359 1.23224 19.3552C1.23224 18.9745 1.3725 18.6439 1.65301 18.3634L18.3634 1.65301C18.6439 1.3725 18.9745 1.23224 19.3552 1.23224C19.7359 1.23224 20.0665 1.3725 20.347 1.65301C20.6275 1.93352 20.7678 2.26412 20.7678 2.64481C20.7678 3.0255 20.6275 3.3561 20.347 3.63661L3.63661 20.347C3.3561 20.6275 3.0255 20.7678 2.64481 20.7678C2.26412 20.7678 1.93352 20.6275 1.65301 20.347Z" fill="currentColor" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">SALES</span>
              </a>
            </li>
            <li className={`text-center list-item mt-[0.83333rem]`} onClick={() => handleNavClick('humans')}>
              <a style={navAnchorStyle} className={`w-[69px] h-[69px] p-[0.83333rem] text-icon  hover:text-white hover:cursor-pointer ${active === 'humans' && 'active'}`}>
                <svg width="22" height="22" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.4548V13.1154C0 12.5347 0.149321 12.0079 0.447964 11.5351C0.746606 11.0622 1.16139 10.7097 1.69231 10.4774C2.90347 9.94646 3.99434 9.56486 4.96493 9.33258C5.93552 9.1003 6.93514 8.98416 7.9638 8.98416C8.99246 8.98416 9.98793 9.1003 10.9502 9.33258C11.9125 9.56486 12.9992 9.94646 14.2104 10.4774C14.7413 10.7097 15.1603 11.0622 15.4672 11.5351C15.7741 12.0079 15.9276 12.5347 15.9276 13.1154V15.4548H0ZM17.4208 15.4548V13.1154C17.4208 12.0701 17.1554 11.2115 16.6244 10.5396C16.0935 9.86765 15.3967 9.32428 14.5339 8.9095C15.6787 9.04223 16.7572 9.23718 17.7692 9.49434C18.7813 9.75151 19.6026 10.046 20.233 10.3778C20.7805 10.6931 21.2119 11.083 21.5272 11.5475C21.8424 12.0121 22 12.5347 22 13.1154V15.4548H17.4208ZM7.9638 7.46606C6.86878 7.46606 5.97285 7.11765 5.27602 6.42082C4.57919 5.72398 4.23077 4.82806 4.23077 3.73303C4.23077 2.63801 4.57919 1.74208 5.27602 1.04525C5.97285 0.348417 6.86878 0 7.9638 0C9.05882 0 9.95475 0.348417 10.6516 1.04525C11.3484 1.74208 11.6968 2.63801 11.6968 3.73303C11.6968 4.82806 11.3484 5.72398 10.6516 6.42082C9.95475 7.11765 9.05882 7.46606 7.9638 7.46606ZM16.9231 3.73303C16.9231 4.82806 16.5747 5.72398 15.8778 6.42082C15.181 7.11765 14.2851 7.46606 13.19 7.46606C13.0075 7.46606 12.8043 7.45362 12.5803 7.42873C12.3563 7.40385 12.1531 7.35822 11.9706 7.29186C12.3688 6.87707 12.6716 6.36689 12.879 5.76131C13.0864 5.15573 13.19 4.47964 13.19 3.73303C13.19 2.98643 13.0864 2.32692 12.879 1.75453C12.6716 1.18213 12.3688 0.655355 11.9706 0.174208C12.1531 0.124435 12.3563 0.0829565 12.5803 0.0497739C12.8043 0.0165914 13.0075 0 13.19 0C14.2851 0 15.181 0.348417 15.8778 1.04525C16.5747 1.74208 16.9231 2.63801 16.9231 3.73303Z" fill="currentColor" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">HUMANS</span>
              </a>
            </li>
            <li className={`text-center list-item mt-[0.83333rem]`} onClick={() => handleNavClick('projects')}>
              <a style={navAnchorStyle} className={`w-[69px] h-[69px] p-[0.83333rem] text-icon  hover:text-white hover:cursor-pointer ${active === 'projects' && 'active'}`}>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.81842V1.73684C0 1.25439 0.16886 0.844298 0.506579 0.506579C0.844298 0.16886 1.25439 0 1.73684 0H20.2632C20.7456 0 21.1557 0.16886 21.4934 0.506579C21.8311 0.844298 22 1.25439 22 1.73684V5.81842H0ZM6.07895 7.55526V20.8132H1.73684C1.25439 20.8132 0.844298 20.6443 0.506579 20.3066C0.16886 19.9689 0 19.5588 0 19.0763V7.55526H6.07895ZM15.9211 7.55526H22V19.0763C22 19.5588 21.8311 19.9689 21.4934 20.3066C21.1557 20.6443 20.7456 20.8132 20.2632 20.8132H15.9211V7.55526ZM14.1842 7.55526V20.8132H7.81579V7.55526H14.1842Z" fill="currentColor" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">PROJECTS</span>
              </a>
            </li>
            <li className={`text-center list-item mt-[0.83333rem]`} onClick={() => handleNavClick('payroll')}>
              <a style={navAnchorStyle} className={`w-[69px] h-[69px] p-[0.83333rem] text-icon  hover:text-white hover:cursor-pointer ${active === 'payroll' && 'active'}`}>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.86819 10.7072C1.3477 10.7072 0.90621 10.526 0.543726 10.1635C0.181242 9.80101 0 9.35953 0 8.83904C0 8.31855 0.181242 7.87706 0.543726 7.51458C0.90621 7.15209 1.35699 6.97085 1.89607 6.97085C2.39797 6.97085 2.83016 7.15674 3.19265 7.52852C3.55513 7.9003 3.73637 8.33714 3.73637 8.83904C3.73637 9.34094 3.55513 9.77778 3.19265 10.1496C2.83016 10.5213 2.38868 10.7072 1.86819 10.7072ZM1.86819 3.73638C1.32911 3.73638 0.882974 3.55513 0.529784 3.19265C0.176595 2.83016 0 2.38868 0 1.86819C0 1.3477 0.181242 0.906211 0.543726 0.543726C0.90621 0.181242 1.3477 0 1.86819 0C2.38868 0 2.83016 0.181242 3.19265 0.543726C3.55513 0.906211 3.73637 1.3477 3.73637 1.86819C3.73637 2.38868 3.55513 2.83016 3.19265 3.19265C2.83016 3.55513 2.38868 3.73638 1.86819 3.73638ZM1.86819 17.6781C1.3477 17.6781 0.90621 17.4968 0.543726 17.1343C0.181242 16.7719 0 16.3397 0 15.8378C0 15.3173 0.181242 14.8711 0.543726 14.4994C0.90621 14.1276 1.35699 13.9417 1.89607 13.9417C2.39797 13.9417 2.83016 14.1276 3.19265 14.4994C3.55513 14.8711 3.73637 15.3173 3.73637 15.8378C3.73637 16.3583 3.55513 16.7951 3.19265 17.1483C2.83016 17.5015 2.38868 17.6781 1.86819 17.6781ZM7.83523 17.1204C7.46346 17.1204 7.15209 16.9949 6.90114 16.744C6.65019 16.493 6.52471 16.1817 6.52471 15.8099C6.52471 15.4381 6.65019 15.1267 6.90114 14.8758C7.15209 14.6248 7.46346 14.4994 7.83523 14.4994H20.6616C21.0334 14.4994 21.3494 14.6248 21.6096 14.8758C21.8699 15.1267 22 15.4381 22 15.8099C22 16.1817 21.8699 16.493 21.6096 16.744C21.3494 16.9949 21.0334 17.1204 20.6616 17.1204H7.83523ZM7.83523 10.1496C7.46346 10.1496 7.15209 10.0241 6.90114 9.77313C6.65019 9.52218 6.52471 9.21082 6.52471 8.83904C6.52471 8.46726 6.65019 8.15589 6.90114 7.90494C7.15209 7.65399 7.46346 7.52852 7.83523 7.52852H20.6616C21.0334 7.52852 21.3494 7.65399 21.6096 7.90494C21.8699 8.15589 22 8.46726 22 8.83904C22 9.21082 21.8699 9.52218 21.6096 9.77313C21.3494 10.0241 21.0334 10.1496 20.6616 10.1496H7.83523ZM7.83523 3.17871C7.46346 3.17871 7.15209 3.05323 6.90114 2.80228C6.65019 2.55133 6.52471 2.23997 6.52471 1.86819C6.52471 1.49641 6.65019 1.18504 6.90114 0.934094C7.15209 0.683143 7.46346 0.557668 7.83523 0.557668H20.6616C21.0334 0.557668 21.3494 0.683143 21.6096 0.934094C21.8699 1.18504 22 1.49641 22 1.86819C22 2.23997 21.8699 2.55133 21.6096 2.80228C21.3494 3.05323 21.0334 3.17871 20.6616 3.17871H7.83523Z" fill="currentColor" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">PAYROLL</span>
              </a>
            </li>
            <li className={`text-center list-item mt-[0.83333rem]`} onClick={() => handleNavClick('reports')}>
              <a style={navAnchorStyle} className={`w-[69px] h-[69px] p-[0.83333rem] text-icon  hover:text-white hover:cursor-pointer ${active === 'reports' && 'active'}`}>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 20.0575V21.0833C0.75 21.7277 1.27233 22.25 1.91667 22.25C2.561 22.25 3.08333 21.7277 3.08333 21.0833V20.0575C3.08333 19.0181 1.82667 18.4976 1.09171 19.2325C0.872916 19.4513 0.75 19.7481 0.75 20.0575ZM5.79167 15.1686V21.0833C5.79167 21.7277 6.314 22.25 6.95833 22.25C7.60267 22.25 8.125 21.7277 8.125 21.0833V15.1686C8.125 14.1292 6.86833 13.6087 6.13338 14.3436C5.91458 14.5624 5.79167 14.8592 5.79167 15.1686ZM10.8333 15.1947V21.0833C10.8333 21.7277 11.3557 22.25 12 22.25C12.6443 22.25 13.1667 21.7277 13.1667 21.0833V15.1947C13.1667 14.8886 13.0464 14.5948 12.8317 14.3766C12.0996 13.6323 10.8333 14.1507 10.8333 15.1947ZM15.875 15.1991V21.0833C15.875 21.7277 16.3973 22.25 17.0417 22.25C17.686 22.25 18.2083 21.7277 18.2083 21.0833V15.1991C18.2083 14.1598 16.9517 13.6392 16.2167 14.3742C15.9979 14.593 15.875 14.8897 15.875 15.1991ZM20.9167 10.2797V21.0833C20.9167 21.7277 21.439 22.25 22.0833 22.25C22.7277 22.25 23.25 21.7277 23.25 21.0833V10.2797C23.25 9.24031 21.9933 8.71978 21.2584 9.45474C21.0396 9.67353 20.9167 9.97028 20.9167 10.2797ZM6.93281 5.94895L1.09611 11.7439C0.874586 11.9639 0.75 12.2632 0.75 12.5753C0.75 13.617 2.00774 14.1406 2.74697 13.4067L7.28509 8.90099C8.54 7.65504 10.5662 7.65867 11.8167 8.90911C13.2674 10.3598 15.6201 10.3577 17.0682 8.90442L22.9098 3.04196C23.1277 2.82329 23.25 2.52719 23.25 2.2185C23.25 1.17815 21.9913 0.658103 21.257 1.39505L16.714 5.95428C15.461 7.21171 13.4254 7.21352 12.1702 5.95833C10.725 4.51313 8.38318 4.50893 6.93281 5.94895Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">REPORTS</span>
              </a>
            </li>
            <li className={`text-center list-item mt-[0.83333rem]`} onClick={() => handleNavClick('docs')}>
              <a style={navAnchorStyle} className={`w-[69px] h-[69px] p-[0.83333rem] text-icon  hover:text-white hover:cursor-pointer ${active === 'docs' && 'active'}`}>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.65206 17.622C1.1748 17.622 0.780142 17.466 0.468085 17.1539C0.156028 16.8419 0 16.4472 0 15.97V1.65206C0 1.1748 0.156028 0.780142 0.468085 0.468085C0.780142 0.156029 1.1748 0 1.65206 0H4.68085C5.15811 0 5.55277 0.156029 5.86483 0.468085C6.17689 0.780142 6.33292 1.1748 6.33292 1.65206V15.97C6.33292 16.4472 6.17689 16.8419 5.86483 17.1539C5.55277 17.466 5.15811 17.622 4.68085 17.622H1.65206ZM9.63705 17.622C9.15978 17.622 8.76512 17.466 8.45307 17.1539C8.14101 16.8419 7.98498 16.4472 7.98498 15.97V1.65206C7.98498 1.1748 8.14101 0.780142 8.45307 0.468085C8.76512 0.156029 9.15978 0 9.63705 0H12.363C12.8402 0 13.2349 0.156029 13.5469 0.468085C13.859 0.780142 14.015 1.1748 14.015 1.65206V15.97C14.015 16.4472 13.859 16.8419 13.5469 17.1539C13.2349 17.466 12.8402 17.622 12.363 17.622H9.63705ZM17.3191 17.622C16.8419 17.622 16.4472 17.466 16.1352 17.1539C15.8231 16.8419 15.6671 16.4472 15.6671 15.97V1.65206C15.6671 1.1748 15.8231 0.780142 16.1352 0.468085C16.4472 0.156029 16.8419 0 17.3191 0H20.3479C20.8252 0 21.2199 0.156029 21.5319 0.468085C21.844 0.780142 22 1.1748 22 1.65206V15.97C22 16.4472 21.844 16.8419 21.5319 17.1539C21.2199 17.466 20.8252 17.622 20.3479 17.622H17.3191Z" fill="currentColor" /></svg>
                <span className="block leading-[1] text-[8px] font-medium">DOCS</span>
              </a>
            </li>
          </ul>
        </div>
        <div onClick={() => {setStayStick(!stayStick)}} className={`basis-[60px] mt-auto hover:bg-[#4a535c] hover:cursor-pointer`} style={{ flex: '0 0 70px' }}>
          <a className={`text-white flex items-center justify-center w-full h-full `}>
            <svg className={`${stayStick ? "transition rotate-180" : "transition"}`} width="13" height="13" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.590597 27.1314C0.221233 26.739 0.0307801 26.2773 0.0192374 25.7463C0.00769482 25.2154 0.198148 24.7537 0.590597 24.3612L11.0828 13.869L0.590597 3.37671C0.221233 3.00735 0.025009 2.55141 0.00192378 2.00891C-0.0211615 1.46641 0.16352 0.998932 0.555969 0.606482C0.925333 0.214033 1.38704 0.0120373 1.94108 0.000494684C2.49513 -0.0110479 2.95683 0.179405 3.3262 0.571854L15.5152 12.7262C15.6768 12.8878 15.798 13.0667 15.8788 13.263C15.9596 13.4592 16 13.6612 16 13.869C16 14.0767 15.9596 14.2787 15.8788 14.4749C15.798 14.6712 15.6768 14.8501 15.5152 15.0117L3.36083 27.1661C2.99146 27.5354 2.53553 27.7201 1.99303 27.7201C1.45052 27.7201 0.983046 27.5239 0.590597 27.1314Z" fill="currentColor" /></svg>
          </a>
        </div>
      </aside>

      <div onMouseLeave={() => stick ? setStick(false) : null} 
      className={`${stick ? "bg-white absolute z-[100] left-[7.08333rem] h-[100vh] top-0 max-w-[218px] block": "max-w-0"} ${ stayStick ? "flex sticky h-[100vh] top-0 max-w-[400px]":"max-w-0"} w-[270px]  flex flex-col`} 
      style={{transition: 'max-width .15s ease-in-out, padding-left .3s ease, padding-right .3s ease , position .3s ease'}}>
        <div className='px-[1.16667rem] flex-none flex justify-between items-center mt-[15px] mb-[10px]'>
          <h3 className='my-[15px] font-semibold text-[15px]'>Accounts</h3>
          <a className='cursor-pointer h-[2.08333rem] min-w-[2.08333rem] text-center bg-[#2bbf57] border-[#2bbf57] hover:bg-[#229544] hover:border-[#229544] text-white inline-flex flex-col justify-center items-center rounded-full text-ellipsis outline' style={{transition: 'box-shadow .2s ease-out'}}>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C9.69048 20 9.43452 19.8988 9.23214 19.6964C9.02976 19.494 8.92857 19.2381 8.92857 18.9286V11.0714H1.07143C0.761905 11.0714 0.505953 10.9702 0.303572 10.7679C0.101191 10.5655 0 10.3095 0 10C0 9.69048 0.101191 9.43452 0.303572 9.23214C0.505953 9.02976 0.761905 8.92857 1.07143 8.92857H8.92857V1.07143C8.92857 0.761905 9.02976 0.505953 9.23214 0.303572C9.43452 0.101191 9.69048 0 10 0C10.3095 0 10.5655 0.101191 10.7679 0.303572C10.9702 0.505953 11.0714 0.761905 11.0714 1.07143V8.92857H18.9286C19.2381 8.92857 19.494 9.02976 19.6964 9.23214C19.8988 9.43452 20 9.69048 20 10C20 10.3095 19.8988 10.5655 19.6964 10.7679C19.494 10.9702 19.2381 11.0714 18.9286 11.0714H11.0714V18.9286C11.0714 19.2381 10.9702 19.494 10.7679 19.6964C10.5655 19.8988 10.3095 20 10 20Z" fill="currentColor"/></svg>
          </a>
        </div>
        <ul className='overflow-y-auto flex-[1 0] border-none m-0 pb-[1.25rem]'>
          <li className='cursor-pointer flex flex-col list-none'>
            <div className='font-medium flex p-0 border-none uppercase relative cursor-pointer min-h-0 leading-none '>
              <a onClick={()=> setCollapse(!collapse)} className={`cursor-pointer back bg-[#5003b01a] text-[#5003b0] rounded-none relative flex-grow leading-6 py-[0.5rem] pl-[1.66667rem] overflow-hidden text-ellipsis max-w-full text-[1rem] my-[0.33333rem] after:content[''] after:bg-[#5003b0] after:absolute after:top-0 after:bottom-0 after:w-[4px] after:block after:right-0`}>
                <span>Accounting</span>
              </a>
            </div>
            <div className={` ${collapse ? "block" : 'hidden'} overflow-auto pl-[1.66667rem] pr-[12px] flex-none`} style={{transition : "display .15s ease-in-out"}}>
              <ul className='relative max-w-full text-[#1D252C] p-0 list-none'>
              {
                navData.map((data , index) => (
                  <li key={index} onClick={(e) => setSelectedNav(data)} className={`${data === selectedNav ? 'bg-[#f5f7f9]' : 'bg-transparent'  } group max-h-[30px] mt-0 rounded-[30px] hover:bg-[#f5f7f9] mb-[0.33333rem] py-[0.5rem] pr-[0.5rem] flex pl-[0.875rem] flex-nowrap items-center justify-between list-none`} style={{transition: 'background-color .3s ease'}}>
                  <a className={`cursor-pointer flex-grow overflow-hidden text-ellipsis break-words rounded-tr-[3px] rounded-br-[3px] max-w-[15.5rem]`} style={{transition: ` ${data === selectedNav ? "color .3s ease"  : "height 0.2s ease-out 0s"}`}}>
                    <span className='whitespace-nowrap break-words '>{data}</span>
                  </a>
                  <a className={`${ data === selectedNav ? 'scale-100 min-w-[22px] h-[22px]' : "scale-0"} group-hover:min-w-[22px] group-hover:h-[22px] group-hover:scale-100 flex-grow-0 bg-[#2bbf57] border-[#2bbf57] text-white flex-col flex justify-center items-center rounded-[50%] p-0 border-solid border-transparent border-spacing-[0.08333rem] min-w-[22px] h-[22px] ml-[10px] mr-[-0.25rem] `} style={{transition: ` ${ index === selectedNav ? 'height 0.2s ease-out 0s' : 'transform .075s ease'}`}}>
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C9.69048 20 9.43452 19.8988 9.23214 19.6964C9.02976 19.494 8.92857 19.2381 8.92857 18.9286V11.0714H1.07143C0.761905 11.0714 0.505953 10.9702 0.303572 10.7679C0.101191 10.5655 0 10.3095 0 10C0 9.69048 0.101191 9.43452 0.303572 9.23214C0.505953 9.02976 0.761905 8.92857 1.07143 8.92857H8.92857V1.07143C8.92857 0.761905 9.02976 0.505953 9.23214 0.303572C9.43452 0.101191 9.69048 0 10 0C10.3095 0 10.5655 0.101191 10.7679 0.303572C10.9702 0.505953 11.0714 0.761905 11.0714 1.07143V8.92857H18.9286C19.2381 8.92857 19.494 9.02976 19.6964 9.23214C19.8988 9.43452 20 9.69048 20 10C20 10.3095 19.8988 10.5655 19.6964 10.7679C19.494 10.9702 19.2381 11.0714 18.9286 11.0714H11.0714V18.9286C11.0714 19.2381 10.9702 19.494 10.7679 19.6964C10.5655 19.8988 10.3095 20 10 20Z" fill="currentColor"/></svg>
                  </a>
                </li>
                ))
              }
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <main className=" w-full bg-body relative flex flex-col overflow-auto ">
      <nav className="w-full h-[3.33333rem] border-[#eceff3] border-b bg-white flex flex-row">
        <div className="overflow-hidden flex-grow pr-[40px] h-full ">
          <ul className="h-full w-full m-0 flex relative p-0">
            {
              nav.map((val) => (

                val === selectedNav ?
                  <li onClick={() => {setNavActive(val) ; navigate("/")}} className="hover:bg-[#f5f7f9] overflow-hidden flex-shrink-0 flex-grow-0 text-center p-0 m-0 text-ellipsis list-none list-item">
                    <a className={` ${navActive === val ? "bg-[#f5f7f9] after:left-0 after:right-0 after:bg-[#1D252C]" : "bg-transparent after:left-[50%] after:right-[50%]"} after:transition-right-left after:ease after:duration-[0.25s] after:absolute after:bottom-0 after:h-[2px] after:content-['']  h-full text-ellipsis cursor-pointer text-[#1D252C] flex items-center py-0 px-[1.66667rem] font-medium relative`} style={{ transition: `${navActive === nav ? "background-color .15s ease" : "color .28s ease;"}` }}>
                      <span className="overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer" title="Sales Quotes">{val}</span>
                    </a>
                  </li>
                  :
                  <li className="hover:bg-[#f5f7f9] overflow-hidden flex-shrink-0 flex-grow-0 text-center p-0 m-0 text-ellipsis list-none list-item">
                    <a className={` ${navActive === val ? "bg-[#f5f7f9] after:left-0 after:right-0 after:bg-[#1D252C]" : "bg-transparent after:left-[50%] after:right-[50%]"}  flex-row justify-between after:transition-right-left after:ease after:duration-[0.25s] after:absolute after:bottom-0 after:h-[2px] after:content-['']  h-full text-ellipsis cursor-pointer text-[#1D252C] flex items-center py-0 px-[1.66667rem] font-medium relative`} style={{ transition: `${navActive === nav ? "background-color .15s ease" : "color .28s ease;"}` }}>
                      <span onClick={() => {setNavActive(val) ; navigate(`/details/${val}`)}} className="overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer" title="Sales Quotes">{val}</span>
                      <span onClick={() => removeNav(val)} className="min-w-[20px] h-[20px] justify-center items-center hover:scale[0.2] flex text-[#1D252C] relative opacity-60 right-[-4px] mr-[-9px]">
                        <svg width="7" height="7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53846 20L0 18.4615L8.46154 10L0 1.53846L1.53846 0L10 8.46154L18.4615 0L20 1.53846L11.5385 10L20 18.4615L18.4615 20L10 11.5385L1.53846 20Z" fill="currentColor" /></svg>
                      </span>
                    </a>
                  </li>

              ))
            }
          </ul>
        </div>
        <div className="flex items-center justify-end shrink-0 h-full">
          <div className="flex items-center">
            <div className="w-[2.5rem] ml-[20px]">
              <a className="cursor-pointer text-[#1D252C] flex flex-row">
                <span className="relative inline-block text-center cursor-pointer text-[#1D252C]">
                  <svg className="opacity-70 hover:opacity-100" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.15 14.275C13.3 14.425 13.475 14.5 13.675 14.5C13.875 14.5 14.0583 14.4167 14.225 14.25C14.3917 14.0833 14.4792 13.8917 14.4875 13.675C14.4958 13.4583 14.4167 13.275 14.25 13.125L10.825 9.7V5.4C10.825 5.2 10.7542 5.02917 10.6125 4.8875C10.4708 4.74583 10.2917 4.675 10.075 4.675C9.85833 4.675 9.67917 4.74583 9.5375 4.8875C9.39583 5.02917 9.325 5.20833 9.325 5.425V10C9.325 10.1 9.34167 10.1917 9.375 10.275C9.40833 10.3583 9.45833 10.4417 9.525 10.525L13.15 14.275ZM10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.63333 0.2625 7.34167 0.7875 6.125C1.3125 4.90833 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3667 0 12.6583 0.2625 13.875 0.7875C15.0917 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90833 19.2125 6.125C19.7375 7.34167 20 8.63333 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0917 18.6875 13.875 19.2125C12.6583 19.7375 11.3667 20 10 20ZM10 18.5C12.3333 18.5 14.3333 17.6667 16 16C17.6667 14.3333 18.5 12.3333 18.5 10C18.5 7.66667 17.6667 5.66667 16 4C14.3333 2.33333 12.3333 1.5 10 1.5C7.66667 1.5 5.66667 2.33333 4 4C2.33333 5.66667 1.5 7.66667 1.5 10C1.5 12.3333 2.33333 14.3333 4 16C5.66667 17.6667 7.66667 18.5 10 18.5Z" fill="currentColor" /></svg>
                </span>
              </a>
            </div>

            <div className="w-[2.5rem] ml-[20px]">
              <a className="cursor-pointer text-[#1D252C] flex flex-row">
                <span className="relative inline-block text-center cursor-pointer text-[#1D252C]">
                  <svg className="opacity-70 hover:opacity-100" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.66667 22.2222C1.22222 22.2222 0.833333 22.0556 0.5 21.7222C0.166667 21.3889 0 21 0 20.5556V3.33333C0 2.88889 0.166667 2.5 0.5 2.16667C0.833333 1.83333 1.22222 1.66667 1.66667 1.66667H3.47222V0.861111C3.47222 0.62037 3.55556 0.416667 3.72222 0.25C3.88889 0.0833332 4.10185 0 4.36111 0C4.62037 0 4.83796 0.0833332 5.01389 0.25C5.18981 0.416667 5.27778 0.62963 5.27778 0.888889V1.66667H14.7222V0.861111C14.7222 0.62037 14.8056 0.416667 14.9722 0.25C15.1389 0.0833332 15.3519 0 15.6111 0C15.8704 0 16.088 0.0833332 16.2639 0.25C16.4398 0.416667 16.5278 0.62963 16.5278 0.888889V1.66667H18.3333C18.7778 1.66667 19.1667 1.83333 19.5 2.16667C19.8333 2.5 20 2.88889 20 3.33333V20.5556C20 21 19.8333 21.3889 19.5 21.7222C19.1667 22.0556 18.7778 22.2222 18.3333 22.2222H1.66667ZM1.66667 20.5556H18.3333V8.61111H1.66667V20.5556ZM1.66667 6.94444H18.3333V3.33333H1.66667V6.94444Z" fill="currentColor" /></svg>
                </span>
              </a>
            </div>
            <div className="w-[2.5rem] ml-[20px]">
              <a className="cursor-pointer text-[#1D252C] flex flex-row">
                <span className="relative inline-block text-center cursor-pointer text-[#1D252C]">
                  <svg className="opacity-70 hover:opacity-100" width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.9375 21.25C0.666667 21.25 0.442708 21.1615 0.265625 20.9844C0.0885418 20.8073 0 20.5833 0 20.3125C0 20.0417 0.0885418 19.8177 0.265625 19.6406C0.442708 19.4635 0.666667 19.375 0.9375 19.375H2.625V9.8125C2.625 8.10417 3.14063 6.55729 4.17188 5.17187C5.20313 3.78646 6.5625 2.91667 8.25 2.5625V1.65625C8.25 1.17708 8.42187 0.78125 8.76562 0.46875C9.10937 0.15625 9.52083 0 10 0C10.4792 0 10.8906 0.15625 11.2344 0.46875C11.5781 0.78125 11.75 1.17708 11.75 1.65625V2.5625C13.4375 2.91667 14.8021 3.78646 15.8437 5.17187C16.8854 6.55729 17.4062 8.10417 17.4062 9.8125V19.375H19.0625C19.3333 19.375 19.5573 19.4635 19.7344 19.6406C19.9115 19.8177 20 20.0417 20 20.3125C20 20.5833 19.9115 20.8073 19.7344 20.9844C19.5573 21.1615 19.3333 21.25 19.0625 21.25H0.9375ZM10 25C9.33333 25 8.75 24.7552 8.25 24.2656C7.75 23.776 7.5 23.1875 7.5 22.5H12.5C12.5 23.1875 12.2552 23.776 11.7656 24.2656C11.276 24.7552 10.6875 25 10 25ZM4.5 19.375H15.5312V9.8125C15.5312 8.25 15.0052 6.93229 13.9531 5.85938C12.901 4.78646 11.6042 4.25 10.0625 4.25C8.5 4.25 7.18229 4.78646 6.10937 5.85938C5.03646 6.93229 4.5 8.25 4.5 9.8125V19.375Z" fill="currentColor" /></svg>
                </span>
              </a>
            </div>
            <div className="w-[2.5rem] ml-[20px]">
              <a className="cursor-pointer text-[#1D252C] flex flex-row">
                <span className="relative inline-block text-center cursor-pointer text-[#1D252C]">
                  <svg className="opacity-70 hover:opacity-100" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM18.5 2.875L10.4 8.175C10.3333 8.20833 10.2708 8.2375 10.2125 8.2625C10.1542 8.2875 10.0833 8.3 10 8.3C9.91667 8.3 9.84583 8.2875 9.7875 8.2625C9.72917 8.2375 9.66667 8.20833 9.6 8.175L1.5 2.875V14.5H18.5V2.875ZM10 6.95L18.4 1.5H1.625L10 6.95ZM1.5 3.05V2.0625V2.075V2.05V3.05Z" fill="currentColor" /></svg>
                </span>
              </a>
            </div>
            <div className="w-[2.5rem] ml-[20px]">
              <a className="cursor-pointer text-[#1D252C] flex flex-row">
                <span className="relative inline-block text-center cursor-pointer text-[#1D252C]">
                  <svg className="opacity-70 hover:opacity-100" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6845 20.4542H8.30952C8.12202 20.4542 7.95583 20.3945 7.81095 20.2752C7.66606 20.1559 7.57658 20.0025
                  7.54249 19.815L7.1334 17.2327C6.80954 17.1133 6.46864 16.9514 6.11069 16.7469C5.75274 16.5423 5.43741 16.3293 5.16469 
                  16.1077L2.78688 17.2071C2.59939 17.2923 2.41189 17.3051 2.22439 17.2454C2.0369 17.1858 1.89201 17.0622 1.78974 16.8747L0.102271
                  13.8833C3.80989e-08 13.7128 -0.0255678 13.5339 0.0255677 13.3464C0.0767032 13.1589 0.178974 13.0055 0.332381 12.8861L2.53121
                  11.2754C2.49712 11.122 2.47581 10.9473 2.46729 10.7512C2.45877 10.5552 2.4545 10.3805 2.4545 10.2271C2.4545 10.0737 2.45877
                  9.89898 2.46729 9.70296C2.47581 9.50694 2.49712 9.33223 2.53121 9.17882L0.332381 7.56805C0.178974 7.44874 0.0767032 7.29533
                  0.0255677 7.10783C-0.0255678 6.92034 3.80989e-08 6.74136 0.102271 6.57091L1.78974 3.57949C1.89201 3.39199 2.0369 3.26841 
                  2.22439 3.20875C2.41189 3.14909 2.59939 3.16188 2.78688 3.2471L5.16469 4.34652C5.43741 4.12493 5.75274 3.91187 6.11069 
                  3.70732C6.46864 3.50278 6.80954 3.34938 7.1334 3.2471L7.54249 0.639194C7.57658 0.451697 7.66606 0.29829 7.81095 
                  0.178974C7.95583 0.059658 8.12202 0 8.30952 0H11.6845C11.872 0 12.0381 0.059658 12.183 0.178974C12.3279 0.29829
                  12.4174 0.451697 12.4515 0.639194L12.8606 3.22154C13.1844 3.34085 13.5296 3.49852 13.8961 3.69454C14.2625 3.89056
                  14.5736 4.10789 14.8293 4.34652L17.2071 3.2471C17.3946 3.16188 17.5821 3.14909 17.7696 3.20875C17.9571 3.26841 
                  18.102 3.39199 18.2042 3.57949L19.8917 6.54534C19.994 6.7158 20.0238 6.89903 19.9812 7.09505C19.9386 7.29107 19.8321 
                  7.44874 19.6616 7.56805L17.4628 9.12769C17.4969 9.29814 17.5182 9.48137 17.5267 9.67739C17.5352 9.87341 17.5395 10.0566
                  17.5395 10.2271C17.5395 10.3976 17.5352 10.5765 17.5267 10.764C17.5182 10.9515 17.4969 11.1305 17.4628 11.3009L19.6616 12.8861C19.815 
                  13.0055 19.9173 13.1589 19.9684 13.3464C20.0195 13.5339 19.994 13.7128 19.8917 13.8833L18.2042 16.8747C18.102 17.0622 
                  17.9571 17.1858 17.7696 17.2454C17.5821 17.3051 17.3946 17.2923 17.2071 17.2071L14.8293 16.1077C14.5566 16.3293 14.2455
                  16.5466 13.8961 16.7597C13.5466 16.9727 13.2015 17.1304 12.8606 17.2327L12.4515 19.815C12.4174 20.0025 12.3279 20.1559
                  12.183 20.2752C12.0381 20.3945 11.872 20.4542 11.6845 20.4542ZM9.99699 13.5509C10.9174 13.5509 11.7015 13.2271 12.3492 
                  12.5793C12.9969 11.9316 13.3208 11.1475 13.3208 10.2271C13.3208 9.30666 12.9969 8.52258 12.3492 7.87487C11.7015 7.22715 
                  10.9174 6.90329 9.99699 6.90329C9.07655 6.90329 8.29247 7.22715 7.64476 7.87487C6.99704 8.52258 6.67318 9.30666 6.67318 
                  10.2271C6.67318 11.1475 6.99704 11.9316 7.64476 12.5793C8.29247 13.2271 9.07655 13.5509 9.99699 13.5509ZM9.99699 
                  12.0168C9.50268 12.0168 9.08081 11.8421 8.73139 11.4927C8.38196 11.1433 8.20725 10.7214 8.20725 10.2271C8.20725 9.73279 
                  8.38196 9.31092 8.73139 8.9615C9.08081 8.61207 9.50268 8.43736 9.99699 8.43736C10.4913 8.43736 10.9132 8.61207 11.2626
                  8.9615C11.612 9.31092 11.7867 9.73279 11.7867 10.2271C11.7867 10.7214 11.612 11.1433 11.2626 11.4927C10.9132 11.8421 10.4913
                  12.0168 9.99699 12.0168ZM8.87201 18.9201H11.122L11.4799 16.0565C12.0424 15.9202 12.5751 15.7071 13.0779 15.4174C13.5807 15.1276 14.0367 
                  14.7782 14.4458 14.3691L17.156 15.5452L18.1787 13.7043L15.7753 11.9401C15.8435 11.6504 15.8989 11.3649 15.9415 11.0836C15.9841 10.8024 16.0054 10.5169 16.0054 
                  10.2271C16.0054 9.93733 15.9884 9.65183 15.9543 9.37058C15.9202 9.08934 15.8605 8.80383 15.7753 8.51406L18.1787 6.74989L17.156 4.90901L14.4458 6.08512C14.0537 5.64195 13.6106 5.27122 13.1163 4.97293C12.6219 4.67464 12.0765 4.48288 11.4799 4.39765L11.122 1.53407H8.87201L8.51406 4.39765C7.93453 4.51697 7.39334 4.72151 6.89051 5.01128C6.38768 5.30105 5.94024 5.659 5.5482 6.08512L2.83802 4.90901L1.81531 6.74989L4.21868 8.51406C4.1505 8.80383 4.0951 9.08934 4.05249 9.37058C4.00988 9.65183
                  3.98857 9.93733 3.98857 10.2271C3.98857 10.5169 4.00988 10.8024 4.05249 11.0836C4.0951 11.3649 4.1505 11.6504 4.21868 11.9401L1.81531 13.7043L2.83802 15.5452L5.5482 14.3691C5.95729 14.7782 6.41324 15.1276 6.91608 15.4174C7.41891 15.7071 7.95157 15.9202 8.51406 16.0565L8.87201 18.9201Z" fill="currentColor" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <AppContext.Provider value={{addNav}}>
      <Outlet/>
    </AppContext.Provider>
      </main>
    </div>
  )
}

export default Root
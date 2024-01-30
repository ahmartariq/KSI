import { useState, useContext } from "react"
import { Pagination } from "./components/Pagination"
import { AppContext } from "./Root"

const data = [
  {
    customer: "SQ0018",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: "approved by client"
  },
  {
    customer: "SQ0017",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0016",
    date: "Advanced Data Systems",
    valied: "Oct 14, 2022",
    amount: '51,293.33',
    status: 'Nov 14, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0015",
    date: "Sarrail Lynch & Hall",
    valied: "Apr 14, 2022",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0014",
    date: "Mcallister & Murphy Pc",
    valied: "Apr 14, 2022",
    amount: '241,265.33',
    status: 'May 13, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0018",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: "approved by client"
  },
  {
    customer: "SQ0017",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0016",
    date: "Advanced Data Systems",
    valied: "Oct 14, 2022",
    amount: '51,293.33',
    status: 'Nov 14, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0015",
    date: "Sarrail Lynch & Hall",
    valied: "Apr 14, 2022",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0014",
    date: "Mcallister & Murphy Pc",
    valied: "Apr 14, 2022",
    amount: '241,265.33',
    status: 'May 13, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0018",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: "approved by client"
  },
  {
    customer: "SQ0017",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0016",
    date: "Advanced Data Systems",
    valied: "Oct 14, 2022",
    amount: '51,293.33',
    status: 'Nov 14, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0015",
    date: "Sarrail Lynch & Hall",
    valied: "Apr 14, 2022",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0014",
    date: "Mcallister & Murphy Pc",
    valied: "Apr 14, 2022",
    amount: '241,265.33',
    status: 'May 13, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0018",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: "approved by client"
  },
  {
    customer: "SQ0017",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0016",
    date: "Advanced Data Systems",
    valied: "Oct 14, 2022",
    amount: '51,293.33',
    status: 'Nov 14, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0015",
    date: "Sarrail Lynch & Hall",
    valied: "Apr 14, 2022",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0014",
    date: "Mcallister & Murphy Pc",
    valied: "Apr 14, 2022",
    amount: '241,265.33',
    status: 'May 13, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0018",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: "approved by client"
  },
  {
    customer: "SQ0017",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0016",
    date: "Advanced Data Systems",
    valied: "Oct 14, 2022",
    amount: '51,293.33',
    status: 'Nov 14, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0015",
    date: "Sarrail Lynch & Hall",
    valied: "Apr 14, 2022",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0014",
    date: "Mcallister & Murphy Pc",
    valied: "Apr 14, 2022",
    amount: '241,265.33',
    status: 'May 13, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0018",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: "approved by client"
  },
  {
    customer: "SQ0017",
    date: "Allied Physics",
    valied: "Apr 13, 2023",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0016",
    date: "Advanced Data Systems",
    valied: "Oct 14, 2022",
    amount: '51,293.33',
    status: 'Nov 14, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0015",
    date: "Sarrail Lynch & Hall",
    valied: "Apr 14, 2022",
    amount: '58,133.43',
    status: 'May 12, 2023',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0014",
    date: "Mcallister & Murphy Pc",
    valied: "Apr 14, 2022",
    amount: '241,265.33',
    status: 'May 13, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0009",
    date: "Pathe Cmptr Cntrl Systems Corp",
    valied: "Jan 22, 2022",
    amount: '207,847.50',
    status: 'Feb 21, 2022',
    approve: 'Waiting For Manager Approve',
  },
  {
    customer: "SQ0007",
    date: "Johnson, Matthew E Esq",
    valied: "Apr 24, 2021",
    amount: '115,011.75',
    status: 'May 24, 2022',
    approve: 'Waiting For Manager Approve',
  },

]

function App({ }) {

  const [search, setSearch] = useState(false)
  const [searchVal, setSearchVal] = useState("")
  const [allCheck, setAllCheck] = useState(false)
  const [enabled, setEnabled] = useState(true)
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);
  const [drawer, setdrawer] = useState(false);
  const { addNav } = useContext(AppContext);



  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const searchtext = (event) => {
    setFilter(event.target.value);
  }


  const handleCheck = (position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(updatedCheckedState);
  };


  return (


    <>
      {/* second NavBar */}
      <div className="w-full flex flex-row items-center justify-between pl-[1.66667rem] py-[1.25rem] max-h-[5rem] bg-white shadow-[0 2px 2px 0 rgb(83 102 119 / 14%);]">
        <div className="flex items-center flex-row">
          <span>
            <div style={{ transition: 'background-color .1s ease' }} className="bg-[#e5f4eb] border-[#c1e6cd] text-[#2bbf57] hover:bg-[#c1e5cf] hover:text-[#229544] cursor-pointer inline-flex flex-col justify-center items-center rounded-full min-w-[2.5rem] h-[2.5rem] p-0 whitespace-nowrap border-[0.08333rem solid transparent] tracking-wider font-normal text-[1rem] border">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C9.69048 20 9.43452 19.8988 9.23214 19.6964C9.02976 19.494 8.92857 19.2381 8.92857 18.9286V11.0714H1.07143C0.761905 11.0714 0.505953 10.9702 0.303572 10.7679C0.101191 10.5655 0 10.3095 0 10C0 9.69048 0.101191 9.43452 0.303572 9.23214C0.505953 9.02976 0.761905 8.92857 1.07143 8.92857H8.92857V1.07143C8.92857 0.761905 9.02976 0.505953 9.23214 0.303572C9.43452 0.101191 9.69048 0 10 0C10.3095 0 10.5655 0.101191 10.7679 0.303572C10.9702 0.505953 11.0714 0.761905 11.0714 1.07143V8.92857H18.9286C19.2381 8.92857 19.494 9.02976 19.6964 9.23214C19.8988 9.43452 20 9.69048 20 10C20 10.3095 19.8988 10.5655 19.6964 10.7679C19.494 10.9702 19.2381 11.0714 18.9286 11.0714H11.0714V18.9286C11.0714 19.2381 10.9702 19.494 10.7679 19.6964C10.5655 19.8988 10.3095 20 10 20Z" fill="currentColor" /></svg>
            </div>
          </span>
          <div className={`flex items-center relative ${search ? 'min-w-[192px]' : 'min-w-[45px]'} ml-[15px]`}>
            <span className="flex items-center h-[18px] cursor-pointer" style={{ flex: '0 0 17px' }} onClick={() => setSearch(true)}>
              <svg className="opacity-70 hover:opacity-100" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4746 19.7175L11.6667 12.9096C11.1017 13.3992 10.4426 13.7806 9.68927 14.0537C8.93597 14.3267 8.13559 14.4633 7.28814 14.4633C5.25424 14.4633 3.53107 13.7571 2.11864 12.3446C0.706215 10.9322 0 9.22787 0 7.23164C0 5.2354 0.706215 3.53107 2.11864 2.11864C3.53107 0.706215 5.24482 0 7.25989 0C9.25612 0 10.9557 0.706215 12.3588 2.11864C13.7618 3.53107 14.4633 5.2354 14.4633 7.23164C14.4633 8.04143 14.3314 8.82298 14.0678 9.57627C13.8041 10.3296 13.4087 11.0358 12.8814 11.6949L19.7458 18.5028C19.9153 18.6535 20 18.8465 20 19.0819C20 19.3173 19.9058 19.5292 19.7175 19.7175C19.548 19.887 19.3409 19.9718 19.096 19.9718C18.8512 19.9718 18.6441 19.887 18.4746 19.7175ZM7.25989 12.7684C8.78531 12.7684 10.0847 12.2269 11.1582 11.1441C12.2316 10.0612 12.7684 8.75706 12.7684 7.23164C12.7684 5.70621 12.2316 4.40207 11.1582 3.31921C10.0847 2.23635 8.78531 1.69492 7.25989 1.69492C5.71563 1.69492 4.40207 2.23635 3.31921 3.31921C2.23635 4.40207 1.69492 5.70621 1.69492 7.23164C1.69492 8.75706 2.23635 10.0612 3.31921 11.1441C4.40207 12.2269 5.71563 12.7684 7.25989 12.7684Z" fill="currentColor" /></svg>
            </span>
            <span className="">
              <input type="text" maxLength={255} value={searchVal} onChange={(e) => setSearchVal(e.target.value)}
                className={`${search ? 'max-w-[170px]' : 'max-w-0 pr-0 pl-0'} active:outline-0 focus-visible:outline-none border-none w-full block rounded-[3px] text-[1rem] py-[1.375rem] px-[0.76923rem] text-ellipsis leading-[1.7] bg-white bg-clip-padding`} autoComplete={"off"} placeholder={"Search"}
                style={{ transition: 'max-width .3s ease, padding-left .3s ease, padding-right .3s ease' }}
              />

            </span>
            <span onClick={() => setSearchVal("")} className={`${search ? "flex" : "hidden"}  items-center h-[18px] flex-[0 0 17px] cursor-pointer`}>
              <svg width="8" height="8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53846 20L0 18.4615L8.46154 10L0 1.53846L1.53846 0L10 8.46154L18.4615 0L20 1.53846L11.5385 10L20 18.4615L18.4615 20L10 11.5385L1.53846 20Z" fill="currentColor" /></svg>
            </span>
            <svg onClick={() => setSearch(false)} className={`${search ? 'block' : 'hidden'} cursor-pointer ml-[12px] p-1`} width="18" height="18" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4094 27.1314C15.7788 26.739 15.9692 26.2773 15.9808 25.7463C15.9923 25.2154 15.8019 24.7537 15.4094 24.3612L4.91716 13.869L15.4094 3.37671C15.7788 3.00735 15.975 2.55141 15.9981 2.00891C16.0212 1.46641 15.8365 0.998932 15.444 0.606482C15.0747 0.214033 14.613 0.0120373 14.0589 0.000494684C13.5049 -0.0110479 13.0432 0.179405 12.6738 0.571854L0.484792 12.7262C0.323195 12.8878 0.201996 13.0667 0.121198 13.263C0.0403996 13.4592 9.53674e-07 13.6612 9.53674e-07 13.869C9.53674e-07 14.0767 0.0403996 14.2787 0.121198 14.4749C0.201996 14.6712 0.323195 14.8501 0.484792 15.0117L12.6392 27.1661C13.0085 27.5354 13.4645 27.7201 14.007 27.7201C14.5495 27.7201 15.017 27.5239 15.4094 27.1314Z" fill="currentColor" /></svg>
          </div>
          <div className={`${search ? "hidden" : "flex"} items-center flex-row ml-[15px]`}>
            <span className="flex items-center justify-center min-w-[2.5rem] p-0">
              <svg className="opacity-70 hover:opacity-100 cursor-pointer" style={{ transition: 'background-color .1s ease' }} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.77738 19.5619C8.43097 19.5619 8.1406 19.4447 7.90627 19.2104C7.67193 18.9761 7.55476 18.6857 7.55476 18.3393V11.0036L0.249618 1.6811C-0.0356596 1.33469 -0.0764137 0.967906 0.127356 0.580744C0.331126 0.193581 0.646969 0 1.07489 0H18.9251C19.353 0 19.6689 0.193581 19.8726 0.580744C20.0764 0.967906 20.0357 1.33469 19.7504 1.6811L12.4452 11.0036V18.3393C12.4452 18.6857 12.3281 18.9761 12.0937 19.2104C11.8594 19.4447 11.569 19.5619 11.2226 19.5619H8.77738ZM10 11.1258L17.3357 1.83393H2.66429L10 11.1258Z" fill="currentColor" /></svg>
            </span>
            <span className="flex items-center justify-center min-w-[2.5rem] p-0 ml-[15px]">
              <svg className="opacity-70 hover:opacity-100 cursor-pointer" style={{ transition: 'background-color .1s ease' }} width="15" height="19" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.07956 23.0889C6.52106 22.8809 4.36817 21.8305 2.6209 19.9376C0.873635 18.0447 0 15.7982 0 13.1981C0 11.5965 0.369215 10.0884 1.10764 8.67395C1.84607 7.25949 2.88092 6.10504 4.21217 5.21061L5.55382 6.55226C4.38898 7.23869 3.48414 8.17993 2.83931 9.37598C2.19449 10.572 1.87207 11.8461 1.87207 13.1981C1.87207 15.2782 2.5585 17.0775 3.93136 18.5959C5.30421 20.1144 7.02028 20.988 9.07956 21.2168V23.0889ZM10.9516 23.0889V21.2168C13.0317 20.9672 14.7478 20.0884 16.0998 18.5803C17.4519 17.0723 18.1279 15.2782 18.1279 13.1981C18.1279 10.9308 17.3427 9.01196 15.7722 7.4415C14.2018 5.87104 12.2829 5.0858 10.0156 5.0858H9.39158L11.2637 6.95788L9.922 8.29953L5.77223 4.14977L9.922 0L11.2637 1.34165L9.39158 3.21373H10.0156C12.8029 3.21373 15.1638 4.18617 17.0983 6.13105C19.0328 8.07592 20 10.4316 20 13.1981C20 15.7982 19.1316 18.0447 17.3947 19.9376C15.6578 21.8305 13.5101 22.8809 10.9516 23.0889Z" fill="currentColor" /></svg>
            </span>
            <span className="flex items-center justify-center min-w-[2.5rem] p-0 ml-[15px]">
              <svg className="opacity-70 hover:opacity-100 cursor-pointer" style={{ transition: 'background-color .1s ease' }} width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C7.22917 20 4.86979 19.026 2.92188 17.0781C0.973959 15.1302 0 12.7708 0 10C0 7.22917 0.973959 4.86979 2.92188 2.92188C4.86979 0.973959 7.22917 0 10 0C11.7708 0 13.3229 0.359375 14.6563 1.07813C15.9896 1.79688 17.1458 2.78125 18.125 4.03125V0H20V7.9375H12.0625V6.0625H17.3125C16.5208 4.8125 15.5104 3.80208 14.2813 3.03125C13.0521 2.26042 11.625 1.875 10 1.875C7.72917 1.875 5.80729 2.66146 4.23437 4.23437C2.66146 5.80729 1.875 7.72917 1.875 10C1.875 12.2708 2.66146 14.1927 4.23437 15.7656C5.80729 17.3385 7.72917 18.125 10 18.125C11.7292 18.125 13.3125 17.6302 14.75 16.6406C16.1875 15.651 17.1875 14.3438 17.75 12.7188H19.6875C19.0833 14.9063 17.8854 16.6667 16.0938 18C14.3021 19.3333 12.2708 20 10 20Z" fill="currentColor" /></svg>
            </span>
            <span className="flex items-center justify-center min-w-[2.5rem] p-0 ml-[15px]">
              <svg className="opacity-70 hover:opacity-100 cursor-pointer" style={{ transition: 'background-color .1s ease' }} width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79545 14.3636C3.46212 14.3636 2.32955 13.8977 1.39773 12.9659C0.465909 12.0341 0 10.9015 0 9.56818C0 8.37121 0.382576 7.32955 1.14773 6.44318C1.91288 5.55682 2.87121 5.02273 4.02273 4.84091C4.25 3.56818 4.87121 2.44318 5.88636 1.46591C6.90152 0.488637 8.05303 0 9.34091 0C9.70455 0 10.0227 0.102273 10.2955 0.306818C10.5682 0.511364 10.7045 0.787879 10.7045 1.13636V7.81818L12.5909 5.93182L13.5682 6.90909L10.0227 10.4545L6.47727 6.90909L7.45455 5.93182L9.34091 7.81818V1.25C8.03788 1.41667 7.01515 1.98864 6.27273 2.96591C5.5303 3.94318 5.15909 5 5.15909 6.13636H4.72727C3.80303 6.13636 3.01136 6.46212 2.35227 7.11364C1.69318 7.76515 1.36364 8.58333 1.36364 9.56818C1.36364 10.553 1.70455 11.3712 2.38636 12.0227C3.06818 12.6742 3.87121 13 4.79545 13H16.1591C16.8409 13 17.4242 12.7576 17.9091 12.2727C18.3939 11.7879 18.6364 11.2045 18.6364 10.5227C18.6364 9.84091 18.3939 9.25758 17.9091 8.77273C17.4242 8.28788 16.8409 8.04546 16.1591 8.04546H14.7273V6.13636C14.7273 5.10606 14.4773 4.21591 13.9773 3.46591C13.4773 2.71591 12.8333 2.12121 12.0455 1.68182V0.204546C13.2727 0.64394 14.2538 1.40909 14.9886 2.5C15.7235 3.59091 16.0909 4.80303 16.0909 6.13636V6.68182C17.1818 6.65152 18.1061 7 18.8636 7.72727C19.6212 8.45455 20 9.38636 20 10.5227C20 11.5682 19.6212 12.4697 18.8636 13.2273C18.1061 13.9848 17.2045 14.3636 16.1591 14.3636H4.79545Z" fill="currentColor" /></svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Pagination perPage={perPage} totalData={data.length} paginate={paginate} currentPage={currentPage} firstData={indexOfFirstData + 1} lastData={indexOfLastData} />
          <span onClick={() => setdrawer(!drawer)} className="mr-[8px] flex justify-center items-center opacity-70 hover:opacity-100 cursor-pointer min-w-[14px] h-[14px]">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.52778 20V13.75H10.1944V16.0556H20V17.7222H10.1944V20H8.52778ZM0 17.7222V16.0556H6.86111V17.7222H0ZM5.19444 13.1111V10.8333H0V9.16667H5.19444V6.83333H6.86111V13.1111H5.19444ZM8.52778 10.8333V9.16667H20V10.8333H8.52778ZM13.1389 6.25V0H14.8056V2.27778H20V3.94444H14.8056V6.25H13.1389ZM0 3.94444V2.27778H11.4722V3.94444H0Z" fill="currentColor" /></svg>
          </span>
        </div>
      </div>


      {/* DRAWER */}
      <div className={` ${drawer ? "block" : "hidden"}  absolute bg-[#8d9ba8cc] z-20 w-full h-screen top-0 left-0 right-0 bottom-0`}></div>
      <div className={` ${drawer ? "w-[390px]" : "w-[0px]"} fixed will-change-[left] right-0 top-0 bottom-0 bg-[#e5e8ee] z-50 m-0  h-full flex flex-col`} style={{ transition: "width .15s ease-in-out, padding-left .3s ease, padding-right .3s ease" }}>
        <div onClick={() => setdrawer(false)} className={` ${drawer ? "block" : "hidden"} hover:cursor-pointer hover:bg-white absolute z-0 top-[13px] right-full mr-[-1px] w-[45px] h-[45px] flex items-center justify-center rounded-tl-[50%] rounded-bl-[50%] bg-[#e5e8ee] `} style={{ transition: "background-color .2s ease" }} >
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53846 20L0 18.4615L8.46154 10L0 1.53846L1.53846 0L10 8.46154L18.4615 0L20 1.53846L11.5385 10L20 18.4615L18.4615 20L10 11.5385L1.53846 20Z" fill="currentColor" /></svg>
        </div>
        <div className="w-full h-full z-[1000] bg-[#e5e8ee]m-0" style={{ boxShadow: "0 0 25px 0px rgb(0 0 0 / 30%)" }}>
          <div className="relative pt-[30px] leading-[1] flex-grow-0 px-[2.08333rem]">
            <div>
              <div className="relative flex items-start justify-between mb-[1.66667rem]">
                <h1 className="inline-flex items-center text-[1rem] m-0 font-normal">Customize List</h1>
              </div>
            </div>
          </div>
          <div className="relative overflow-auto flex-grow-[2] py-[15px] px-[2.08333rem]">
            <div className="flex flex-col">
              <div className={` ${enabled ? "bg-white" : "bg-[#ffffff99]" } py-[4px] px-[2px] h-[34.987px] w-full relative flex justify-between items-center min-h-[2.9166rem] rounded-[5px] border border-[#C4D0DA]`}>
                <div className="flex justify-center items-center self-center cursor-move" style={{ flex: "0 0 2.9166rem" }}>
                  <svg width="10" height="26" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.9 32C2.83333 32 1.91667 31.6083 1.15 30.825C0.383333 30.0417 0 29.1167 0 28.05C0 26.95 0.383333 26.0167 1.15 25.25C1.91667 24.4833 2.85 24.1 3.95 24.1C5.01667 24.1 5.94167 24.4917 6.725 25.275C7.50833 26.0583 7.9 26.9833 7.9 28.05C7.9 29.15 7.50833 30.0833 6.725 30.85C5.94167 31.6167 5 32 3.9 32ZM15.95 32C14.8833 32 13.9667 31.6083 13.2 30.825C12.4333 30.0417 12.05 29.1167 12.05 28.05C12.05 26.95 12.4333 26.0167 13.2 25.25C13.9667 24.4833 14.9 24.1 16 24.1C17.0667 24.1 17.9917 24.4917 18.775 25.275C19.5583 26.0583 19.95 26.9833 19.95 28.05C19.95 29.15 19.5583 30.0833 18.775 30.85C17.9917 31.6167 17.05 32 15.95 32ZM3.9 19.95C2.83333 19.95 1.91667 19.5833 1.15 18.85C0.383333 18.1167 0 17.1667 0 16C0 14.9 0.383333 13.9667 1.15 13.2C1.91667 12.4333 2.85 12.05 3.95 12.05C5.01667 12.05 5.94167 12.4333 6.725 13.2C7.50833 13.9667 7.9 14.9 7.9 16C7.9 17.1667 7.50833 18.1167 6.725 18.85C5.94167 19.5833 5 19.95 3.9 19.95ZM15.95 19.95C14.8833 19.95 13.9667 19.5833 13.2 18.85C12.4333 18.1167 12.05 17.1667 12.05 16C12.05 14.9 12.4333 13.9667 13.2 13.2C13.9667 12.4333 14.9 12.05 16 12.05C17.0667 12.05 17.9917 12.4333 18.775 13.2C19.5583 13.9667 19.95 14.9 19.95 16C19.95 17.1667 19.5583 18.1167 18.775 18.85C17.9917 19.5833 17.05 19.95 15.95 19.95ZM3.9 7.9C2.83333 7.9 1.91667 7.50833 1.15 6.725C0.383333 5.94167 0 5.01667 0 3.95C0 2.85 0.383333 1.91667 1.15 1.15C1.91667 0.383333 2.85 0 3.95 0C5.01667 0 5.94167 0.391667 6.725 1.175C7.50833 1.95833 7.9 2.88333 7.9 3.95C7.9 5.05 7.50833 5.98333 6.725 6.75C5.94167 7.51667 5 7.9 3.9 7.9ZM15.95 7.9C14.8833 7.9 13.9667 7.50833 13.2 6.725C12.4333 5.94167 12.05 5.01667 12.05 3.95C12.05 2.85 12.4333 1.91667 13.2 1.15C13.9667 0.383333 14.9 0 16 0C17.0667 0 17.9917 0.391667 18.775 1.175C19.5583 1.95833 19.95 2.88333 19.95 3.95C19.95 5.05 19.5583 5.98333 18.775 6.75C17.9917 7.51667 17.05 7.9 15.95 7.9Z" fill="currentColor" /></svg>
                </div>
                <div className="text-[#536677] mr-[15px] flex-grow overflow-hidden ">Action</div>
                <div className="flex items-center px-[5px]">
                  <button className="opacity-70 items-center justify-center min-w-[2.5rem] p-0">
                    <span></span>
                  </button>
                </div>
                <div className="ml-[0.5rem]">
                  <label class="inline-flex relative items-center mr-5 cursor-pointer ">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={enabled}
                      readOnly
                    />
                    <div
                      onClick={() => {
                        setEnabled(!enabled);
                      }}
                      className="w-[45px] h-[20px] bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-[163%] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="pb-0 min-w-[960px]">
        <div className="p-0 relative overflow-visible">
          <div className="w-full p-0 m-0 border-none static overflow-visible ">
            <div className="p-0 m-0 border-none w-auto overflow-hidden text-[#1D252C] bg-[#f5f7f9] fixed" style={{ boxShadow: "0 1px 2px 0 #dbe3ea", transition: "left 0.15s ease-in-out" }}>
              <table border={0} className="m-0 p-0 broder-none table-fixed w-full rounded-tl-[5px] rounded-tr-[5px] table border-collapse border-spacing-0">
                <colgroup>

                </colgroup>
                <tbody>
                  <tr className="m-0 h-0 overflow-hidden">
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[47px] relative pl-[29px] pr-[8px] after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[80px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[93px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[277px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[150px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[100px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[150px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden py-0 border-y-0 m-0 w-[218px] relative after:right-0 after:content[''] after:absolute after:w-[1px] after:top-[20%] after:bottom-[20%] bg-[#dbe3ea]"></td>
                  </tr>
                  <tr>
                    <td rowSpan={1} align={"center"} className="overflow-hidden relative pl-[29px] pr-[8px] text-left h-[32px] px-[8px] uppercase font-semibold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <span className="relative inline-block min-h-[1rem] pl-[1rem] text-left ">
                        <input value={allCheck} onClick={() => { setIsChecked(new Array(data.length).fill(!allCheck)); setAllCheck(!allCheck) }} type="checkbox" className="absolute top-[50%] mt-[-0.5rem] left-0 h-[1rem] w-[1rem] cursor-pointer z-10" />
                        <label className="mr-0 inline-flex items-center align-middle before:content-[''] before:border-[#8d9ba8] before:rounded-[0.25rem] beofre:border before:border-solid before:absolute before:top-[50%] before:mt-[-0.5rem] before:left-0 before:h-[1rem] before:w-[1rem] before:cursor-pointer after:block after:content-['\e902'] after:absolute after:text-[0.95rem] after:top-[50%] after:mt-[-0.5rem] after:left-[-0.15rem] after:text-[#000]"></label>
                      </span>
                    </td>
                    <td rowSpan={1} align={"center"} className="relative h-[32px] px-[8px] uppercase font-bold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <div className="inline-flex items-center justify-between overflow-hidden whitespace-nowrap w-full max-w-full">
                        <span>Number</span>
                      </div>
                    </td>
                    <td rowSpan={1} align={"center"} className="relative h-[32px] px-[8px] uppercase font-bold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <div className="inline-flex items-center justify-between overflow-hidden whitespace-nowrap w-full max-w-full">
                        <span>Customer</span>
                      </div>
                    </td>
                    <td rowSpan={1} align={"center"} className="relative h-[32px] px-[8px] uppercase font-bold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <div className="inline-flex items-center justify-between overflow-hidden whitespace-nowrap w-full max-w-full">
                        <span>Date</span>
                      </div>
                    </td>
                    <td rowSpan={1} align={"center"} className="relative h-[32px] px-[8px] uppercase font-bold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <div className="inline-flex items-center justify-between overflow-hidden whitespace-nowrap w-full max-w-full">
                        <span>Valid Date</span>
                      </div>
                    </td>
                    <td rowSpan={1} className="relative text-right h-[32px] px-[8px] uppercase font-bold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <div className="inline-flex items-center justify-end overflow-hidden whitespace-nowrap w-full max-w-full">
                        <span>Amount</span>
                      </div>
                    </td>
                    <td rowSpan={1} align={"center"} className="relative h-[32px] px-[8px] uppercase font-bold text-[9px] cursor-pointer after:right-0 after:content-[''] after:absolute after:w-[1.5px] after:top-[20%] after:bottom-[20%] after:bg-[#dbe3ea]">
                      <div className="inline-flex items-center justify-between overflow-hidden whitespace-nowrap w-full max-w-full">
                        <span>Status</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full overflow-auto p-0 m-0 border-none h-auto">
              <table border={0} className="m-0 border-none table-fixed pt-[30px] w-full bg-[#eceff3] text-[#536677] border-separate" style={{ borderSpacing: '0 1px' }}>
                <tbody className="border-none">
                  <tr className="m-0 h-0 overflow-hidden">
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[47px] relative pl-[29px] pr-[8px]"></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[80px] relative "></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[93px] relative "></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[277px] relative "></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[150px] relative "></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[100px] relative "></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[150px] relative "></td>
                    <td colSpan={1} rowSpan={1} className="h-0 overflow-hidden p-0 border-y-0 m-0 w-[218px] relative "></td>
                  </tr>
                  {
                    currentData.map((d, index) => (
                      <tr key={index} className={` hover:bg-[#f5f7f9] bg-[#fff] shadow-none p-0 m-0 border-none`} style={{ transition: 'background 0.2s ease' }}>
                        <td align="center" className="  relative pl-[29px] pr-[8px] text-left h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="relative inline-block min-h-[1rem] pl-[1rem] text-left ">
                            <input checked={isChecked[index]} onChange={() => handleCheck(index)} type="checkbox" className="absolute top-[50%] mt-[-0.5rem] left-0 h-[1rem] w-[1rem] cursor-pointer z-10" />
                            <label className="mr-0 inline-flex items-center align-middle before:content-[''] before:border-[#8d9ba8] before:rounded-[0.25rem] beofre:border before:border-solid before:absolute before:top-[50%] before:mt-[-0.5rem] before:left-0 before:h-[1rem] before:w-[1rem] before:cursor-pointer after:block after:content-['\e902'] after:absolute after:text-[0.95rem] after:top-[50%] after:mt-[-0.5rem] after:left-[-0.15rem] after:text-[#000]"></label>
                          </span>
                        </td>
                        <td className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a] h-[18px] hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span className="text-[#8D9BA8] flex justify-center items-center whitespace-nowrap w-full h-full">
                              <svg width="22" height="5" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.08333 3 0.729167 2.85417 0.4375 2.5625C0.145833 2.27083 0 1.91667 0 1.5C0 1.08333 0.145833 0.729166 0.4375 0.437499C0.729167 0.145833 1.08333 0 1.5 0C1.91667 0 2.27083 0.145833 2.5625 0.437499C2.85417 0.729166 3 1.08333 3 1.5C3 1.91667 2.85417 2.27083 2.5625 2.5625C2.27083 2.85417 1.91667 3 1.5 3ZM10 3C9.58333 3 9.22917 2.85417 8.9375 2.5625C8.64583 2.27083 8.5 1.91667 8.5 1.5C8.5 1.08333 8.64583 0.729166 8.9375 0.437499C9.22917 0.145833 9.58333 0 10 0C10.4167 0 10.7708 0.145833 11.0625 0.437499C11.3542 0.729166 11.5 1.08333 11.5 1.5C11.5 1.91667 11.3542 2.27083 11.0625 2.5625C10.7708 2.85417 10.4167 3 10 3ZM18.5 3C18.0833 3 17.7292 2.85417 17.4375 2.5625C17.1458 2.27083 17 1.91667 17 1.5C17 1.08333 17.1458 0.729166 17.4375 0.437499C17.7292 0.145833 18.0833 0 18.5 0C18.9167 0 19.2708 0.145833 19.5625 0.437499C19.8542 0.729166 20 1.08333 20 1.5C20 1.91667 19.8542 2.27083 19.5625 2.5625C19.2708 2.85417 18.9167 3 18.5 3Z" fill="currentColor" /></svg>
                            </span>
                          </span>
                        </td>
                        <td className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className=" hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span onClick={() => addNav(d.customer)} className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a] whitespace-nowrap w-full h-full">
                              <a className="text-[#1071e3]">
                                {d.customer}
                              </a>
                            </span>
                          </span>
                        </td>
                        <td className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a] whitespace-nowrap w-full h-full">
                              <a className="p-[8px]">
                                {d.date}
                              </a>
                            </span>
                          </span>
                        </td>
                        <td className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a] hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span className="whitespace-nowrap w-full h-full">
                              <a className="">
                                {d.valied}
                              </a>
                            </span>
                          </span>
                        </td>
                        <td align="right" className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a] hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span className=" whitespace-nowrap w-full h-full">
                              <a className="">
                                {d.amount}
                              </a>
                            </span>
                          </span>
                        </td>
                        <td className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a] hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span className=" whitespace-nowrap w-full h-full">
                              <a className="">
                                {d.status}
                              </a>
                            </span>
                          </span>
                        </td>

                        <td className="group relative h-[32px] border-none overflow-visible" style={{ transition: '0.2s width ease-out 0s' }}>
                          <span className="group-hover:outline group-hover:outline-1 group-hover:outline-[#0000001a]  hover:cursor-pointer relative px-[8px] inline-block overflow-hidden text-ellipsis align-middle max-w-full min-w-[22px] whitespace-nowrap">
                            <span className="whitespace-nowrap w-full h-full">
                              <a className="">
                                {d.approve}
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App


//
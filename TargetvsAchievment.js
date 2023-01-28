import React from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
    CContainer,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop, cilPlus } from '@coreui/icons'

const TargetvsAchievment = () => {
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">Target vs Achievment</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-center mb-2'>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup
                                    className='mb-2'
                                >
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        From
                                    </CInputGroupText>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup className='mb-2'>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        To
                                    </CInputGroupText>
                                    <CFormInput
                                        type='date'
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </CInputGroup>
                            </CCol>
                            <CCol lg={5} className='mb-2'>
                                <CButton type="button" color="primary">
                                    Search
                                </CButton>
                            </CCol>
                            <CCol></CCol>
                        </CRow>
                        <CRow >
                            <CCol lg={2} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        All
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Service Receipt</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Select Service</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={4} sm={6} className='mb-2' >
                                <CButton color="primary" className='float-end '>
                                    <CIcon icon={cilPlus} />
                                    {' '}New Invoice
                                </CButton>
                            </CCol>
                        </CRow>
                        <CContainer style={{ width: "100%", overflow: "hidden", overflowX: "scroll" }}>
                            <CContainer style={{ minWidth: "4500px" ,textAlign:"center" }}>
                        
                                    <CRow className='targetHeader'>
                                        <CCol  style={{maxWidth: "100px"}}></CCol>
                                        <CCol ></CCol>
                                        <CCol >January</CCol>
                                        <CCol >February</CCol>
                                        <CCol >March</CCol>
                                        <CCol >April</CCol>
                                        <CCol >May</CCol>
                                        <CCol >June</CCol>
                                        <CCol >July</CCol>
                                        <CCol >August</CCol>
                                        <CCol >September</CCol>
                                        <CCol >October</CCol>
                                        <CCol >Nobember</CCol>
                                        <CCol >December</CCol>
                                    </CRow>
                                
                                <CRow >
                                    <CCol style={{ backgroundColor: "red" ,maxWidth:"100px"}}>Sr No</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Center Name</CCol>
                                    <CCol style={{ backgroundColor: "black" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Target</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}>Revenue</CCol>
                                    <CCol style={{ backgroundColor: "yellow" }}></CCol>
                                   
                                   
                                   
                                    

                                </CRow>

                               
                            </CContainer>
                        </CContainer>
                        {/* <tbody>
                            <table border="2">
                                <tr>
                                    <td rowSpan={2}>Sr. No.</td>
                                    <td rowSpan={2}>CenterName</td>
                                    <td colSpan={2}>January</td>
                                    <td colSpan={2}>February</td>
                                    <td colSpan={2}>March</td>
                                    <td colSpan={2}>April</td>
                                    <td colSpan={2}>May</td>
                                    <td colSpan={2}>June</td>
                                    <td colSpan={2}>July</td>
                                    <td colSpan={2}>August</td>
                                    <td colSpan={2}>September</td>
                                    <td colSpan={2}>October</td>
                                    <td colSpan={2}>November</td>
                                    <td colSpan={2}>December</td>
                                </tr>
                                <tr>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                    <td>Target</td>
                                    <td>Revenue</td>
                                </tr>
                            </table>
                        </tbody> */}
                        {/* <CTable bordered style={{ borderColor: "#106103" }} responsive>
                            <CTableHead style={{ backgroundColor: "#106103", color: "white" }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">Sr No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Center Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Revenue
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">
                                        Target
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Target</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Revenue</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell></CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable> */}
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default TargetvsAchievment
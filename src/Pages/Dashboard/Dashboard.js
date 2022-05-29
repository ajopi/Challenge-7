import React, { useEffect, useState } from 'react'
import logoKotak from '../../Assets/img/Rectangle 63.png'
import logoHome from '../../Assets/img/fi_home.png'
import logoTruck from '../../Assets/img/fi_truck.png'
import logoDashboard from '../../Assets/img/Rectangle 62.png'
import menu from '../../Assets/img/fi_menu.png'
import akun from '../../Assets/img/Group 15.png'
import chevron from '../../Assets/img/fi_chevron-down.png'
import chevronRright from '../../Assets/img/Vector.png'
import horizontalLogo from '../../Assets/img/Rectangle 9.png'

import { Button, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, Pagination, Table } from 'react-bootstrap'



import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
export const Dashboard = () => {
    const navigate = useNavigate();
    const [Token, setToken] = useState(sessionStorage.getItem("Token"))
    useEffect(() => {
      if (!Token) {
          navigate(`/`)
      }
    
    }, [])

    const dataTable = () => {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data.push(
                <tr>
                    <td>{i + 1}</td>
                    <td>User Email</td>
                    <td>Car{i + 1}</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                </tr>
            );
        }
        return data;
    }

    const dataTable2 = () => {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data.push(
                <tr>
                    <td>{i + 1}</td>
                    <td>Name</td>
                    <td>Ctegory</td>
                    <td>Price</td>
                    <td>Start rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Updated at</td>
                </tr>
            );
        }
        return data;
    }

    return (
        <div className='main-container'>
            <div className='container-dashboard'>
                <img alt='' src={logoKotak} className='logo-kotak' />

                <div>
                    <a href='dashboard' className='tag'> <i>
                        <img alt='' src={logoHome} className='logo-home' />
                    </i>
                        Dashboard
                    </a>
                </div>

                <div>
                    <a href='cars' className='tag'> <i>
                        <img alt='' src={logoTruck} className='logo-truck' />
                    </i>
                        Cars
                    </a>
                </div>

                {/* <img alt='' src={logoTruck} className='logo-truck' />
        <div className='tag'>
            Cars
        </div> */}
            </div>

            <div className='navbar-content'>
                <div className='container-navbar'>
                    <Navbar expand="lg" className='navbar-custom'>
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>
                                    <img alt='' src={logoDashboard} />
                                    <img alt='' src={menu} className='menu-hamburger' />

                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="primary" className='btn-search'>Search</Button>
                                </Form>

                                <img alt='' src={akun} className='logo-akun' />
                                <div className='akun-name'>
                                    Unis Badri
                                </div>
                                <img alt='' src={chevron} />
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div className='container-content'>
                    <div className='menu'>
                        <div className='dashboard-up'>
                            DASHBOARD
                        </div>

                        <div className='dashboard-low'>
                            <div className='dashboard-low-title'>
                                Dashboard
                            </div>
                        </div>
                    </div>

                    <div className='container-table'>
                        <div className='main-container-table'>

                            <div className='content-table'>
                                <div className='dashboard-table'>
                                    Dashboard
                                </div>

                                <div className='chevron-right'>
                                    <img alt='' src={chevronRright} />
                                </div>

                                <div className='dashboard-table-2'>
                                    Dashboard
                                </div>

                            </div>

                            <div className='dashboard-3'>
                                Dashboard
                            </div>

                            <div className='list-order'>
                                <img alt='' src={horizontalLogo} />

                                <div style={{ margin: '0px 0px 0px 8px' }}>
                                    List Order
                                </div>
                            </div>

                            <div className='table-dashboard'>
                                <Table striped bordered hover>
                                    <thead className='thead-table'>
                                        <tr>
                                            <th>No</th>
                                            <th>User Email</th>
                                            <th>Car</th>
                                            <th>Start Rent</th>
                                            <th>Finish Rent</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataTable()}
                                    </tbody>
                                </Table>
                            </div>

                            <div className='property-table'>
                                <div className='txt-table'>
                                    Limit
                                </div>

                                <div className='txt-table' style={{ margin: '0px 0px 0px 56px' }}>
                                    Jump to Page
                                </div>
                            </div>

                            <div className='dropdown-page'>
                                <DropdownButton id="dropdown-basic-button" variant='light' title="10" className='dropdown-content'>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                                </DropdownButton>

                                <DropdownButton id="dropdown-basic-button" variant='light' title="10" className='dropdown-content-2'>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                                </DropdownButton>

                                <button className='btn-go'>Go</button>


                                <div className='pagination-no'>

                                    <Pagination>
                                        <Pagination.Prev />
                                        <Pagination.Item>{1}</Pagination.Item>

                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{9}</Pagination.Item>
                                        <Pagination.Next />
                                    </Pagination>
                                </div>
                            </div>




                            <div className='list-order'>
                                <img alt='' src={horizontalLogo} />

                                <div style={{ margin: '0px 0px 0px 8px' }}>
                                    List Cars
                                </div>
                            </div>

                            <div className='table-dashboard'>
                                <Table striped bordered hover>
                                    <thead className='thead-table'>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Start Rent</th>
                                            <th>Finish Rent</th>
                                            <th>Created at</th>
                                            <th>Updated at</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataTable2()}
                                    </tbody>
                                </Table>
                            </div>

                            <div className='property-table'>
                                <div className='txt-table'>
                                    Limit
                                </div>

                                <div className='txt-table' style={{ margin: '0px 0px 0px 56px' }}>
                                    Jump to Page
                                </div>
                            </div>

                            <div className='dropdown-page'>
                                <DropdownButton id="dropdown-basic-button" variant='light' title="10" className='dropdown-content'>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                                </DropdownButton>

                                <DropdownButton id="dropdown-basic-button" variant='light' title="10" className='dropdown-content-2'>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">7</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">8</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">9</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">10</Dropdown.Item>
                                </DropdownButton>

                                <button className='btn-go'>Go</button>


                                <div className='pagination-no'>

                                    <Pagination>
                                        <Pagination.Prev />
                                        <Pagination.Item>{1}</Pagination.Item>

                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{9}</Pagination.Item>
                                        <Pagination.Next />
                                    </Pagination>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import authService from '../../services/auth.service';
import establishmentsService from '../../services/establishment.service';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    UncontrolledDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from "reactstrap";
import { 
    AiOutlineDelete, 
    AiOutlineEdit } 
from 'react-icons/ai';

class EstablishmentsPage extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            redirectsTo: null,
            establishments: []
        }

    }

    async componentDidMount() {
        let loggedUser = await authService.getLoggedUser();
        if(!loggedUser) {
            this.setState({redirectsTo: "/login"})
        }
        this.getEstablishments();
    }

    getEstablishments = async () => {
        try {
            let res = await establishmentsService.getEstablishments();
            this.setState({
                establishments: res.data.data.establishments
            });
        } catch (error) {
            this.setState({redirectsTo: "/login"})
        }
    }

    render() {

        const { establishments } = this.state;

        console.log(establishments)

        /* if(this.state.redirectsTo) {
            return(
                <Redirect to={this.state.redirectsTo}/>
            )
        } */
        return (
          <div className="container">
              <>
                <div className="content">
                    <Row>
                        <Col md="12">
                        <Card>
                            <CardHeader>
                            <CardTitle tag="h4">Stablishments List</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Cnpj</th>
                                    <th>Created By</th>
                                    <th>Created At</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {establishments ? establishments.map((item, index) =>
                                        <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.city}</td>
                                        <td>{item.cnpj}</td>
                                        <td>{item.created_by}</td>
                                        <td>{item.created_at}</td>
                                        <td style={{"fontSize": "20px"}}>
                                            <UncontrolledDropdown>
                                                <DropdownToggle>
                                                    <i className="bi bi-three-dots-vertical"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{
                                                        pathname: "/editStablishment",
                                                        state: {analysisHash: item.id}
                                                    }}>
                                                        <DropdownItem>
                                                                <AiOutlineEdit /> Editar
                                                        </DropdownItem>
                                                    </Link>
                                                    <DropdownItem onClick={async (e) => console.log('deleted')/* await this.handleDelete(e, item.hash) */}>
                                                        <AiOutlineDelete /> Excluir
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                        </tr>
                                    ):null}
                                </tbody>
                            </Table>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                </div>
            </>
          </div>
        )
    }

}

export default EstablishmentsPage;

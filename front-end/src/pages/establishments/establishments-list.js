import React from 'react';
import { Link } from 'react-router-dom';
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
} from "reactstrap";
import { 
    AiOutlineDelete, 
    AiTwotoneEdit, } 
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

    handleDelete = async (e, index, id) => {
        try {
            e.preventDefault();
            await establishmentsService.deleteEstablishment(id);

            let items= this.state.establishments;
            items.splice(index,1);
            this.setState({ establishments:items });
        } catch (error) {
            this.setState({redirectsTo: "/login"})
        }
    }

    render() {

        const { establishments } = this.state;

        return (
            <div className="container">
                <Link to={{ pathname: "/newEstablishment" }} className="btn btn-success create-button-establishment">
                    New Establishment
                </Link>
              <>
                <div className="content">
                    <Row>
                        <Col md="12">
                        <Card>
                            <CardHeader>
                            <CardTitle tag="h4">Establishments List</CardTitle>
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
                                    <th>Edit</th>
                                    <th>Delete</th>
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
                                            <td>
                                                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{
                                                    pathname: "/editEstablishment",
                                                    state: {establishmentId: item._id}
                                                }}>
                                                    <AiTwotoneEdit />
                                                </Link>
                                            </td>
                                            <td>
                                                <AiOutlineDelete className="delete-button" onClick={async (e) => await this.handleDelete(e, index, item._id)}/>
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

import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import establishmentsService from '../../services/establishment.service';
import { cnpjMask } from '../../helpers/utils';
import { Redirect } from 'react-router-dom';
import { format } from 'date-fns';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    RiEdit2Fill,
    RiDeleteBin2Fill
} 
from 'react-icons/ri';

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

    componentDidUpdate() {
        this.loadToast();
    }

    loadToast = () => {
        if (this.props.location.state && this.props.location.state.toast) {
            switch (this.props.location.state.toast) {
                case 'establishment-creation':
                    toast.success(`${this.props.location.state.message} 🔥`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    });
                default:
                    break;
            }
            const {history} = this.props;
            history.replace() 
        }
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

        if(this.state.redirectsTo) {
            return(
                <Redirect to={this.state.redirectsTo}/>
            )
        }

        const { establishments } = this.state;

        return (
            <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                transition={Flip}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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
                                    <th style={{"textAlign": "center"}}>Actions</th>
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
                                            <td className='establishments-list-actions'>
                                                <div>
                                                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{
                                                        pathname: "/editEstablishment",
                                                        state: {establishmentId: item._id}
                                                    }}>
                                                        <RiEdit2Fill />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <RiDeleteBin2Fill className="delete-button" onClick={async (e) => await this.handleDelete(e, index, item._id)}/>
                                                </div>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.city}</td>
                                            <td>{cnpjMask(item.cnpj)}</td>
                                            <td>{item.created_by}</td>
                                            <td>{format(new Date(item.created_at), "yyyy-MM-dd HH:mm:ss")}</td>
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

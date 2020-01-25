import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class FetchStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { studList: [], loading: true };

        fetch('api/Student/All')
            .then(response => response.json())
            .then(data => {
                    this.setState({ studList: data, loading: false });
                });

        // binding - callback 
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStudentTable(this.state.studList);

        return <div>
            <h1>Lista Uczestnikow</h1>
            <p>Sprawdz czlonkow poszczegolnych Kol Naukowych</p>
            <p>
                <Link to="/addstudent">Zapisz się !</Link>
            </p>
            {contents}
        </div>;
    }

    handleDelete(id) {
        if (!window.confirm("Usun studenta o Id: " + id))
            return;
        else {
            fetch('api/Student/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        studList: this.state.studList.filter((rec) => {
                            return (rec.studentId != id);
                        })
                    });
            });
        }
    }

    handleEdit(id) {
        this.props.history.push("/student/edit/" + id);
    }

    // zwraca tabele HTML do render() 
    renderStudentTable(studList) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Grupa</th>
                </tr>
            </thead>
            <tbody>
                {studList.map(st =>
                    <tr key={st.studentId}>
                        <td></td>
                        <td>{st.studentId}</td>
                        <td>{st.firstName}</td>
                        <td>{st.lastName}</td>
                        <td>{st.email}</td>
                        <td>{st.groupName}</td>
                        <td >
                            <a className="action" style={{
                                color: 'forestgreen', 'cursor': 'pointer' }} onClick={(id) => this.handleEdit(st.studentId)}>Edit</a>  |
                            <a className="action" style={{
                                color: 'orangered',  'cursor': 'crosshair'
                            }} onClick={(id) => this.handleDelete(st.studentId)}> Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class StudentData {
    studentId = 0;
    firstName = "";
    lastName = "";
    email = "";
    groupName = "";
}
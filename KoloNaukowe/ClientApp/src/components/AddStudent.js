import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { StudentData } from './FetchStudent';

export class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, GroupList: [], stuData: new StudentData };

        fetch('api/Student/GetGroupList')
            .then(response => response.json())
            .then(data => {
                this.setState({ GroupList: data });
            });

        var stid = this.props.match.params["stid"];
        // ustawienie statusu dla Student edit  
        if (stid > 0) {
            fetch('api/Student/' + stid)
                .then(response => response.json())
                .then(data => {
                    this.setState({ title: "Edytuj", loading: false, stuData: data });
                });
        }
        // ustawienie statusu dla Student add
        else {
            this.state = { title: "Zapis", loading: false, GroupList: [], stuData: new StudentData };
        }
        // binding - callback
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.GroupList);
        return <div>
            <h1>{this.state.title}</h1>
            <h3>Kola Naukowe</h3>
            <hr />
            {contents}
        </div>;
    }
    // submit  
    handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // PUT dla Edit student.  
        if (this.state.stuData.studentId) {
            fetch('api/Student/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchstudent");
                })
        }
        // POST dla Add student.  
        else {
            fetch('api/Student/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchstudent");
                })
        }
    }
    // Cancel button click  
    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchstudent");
    }
    // zwraca HTML Form do render()  
    renderCreateForm(GroupList) {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="studentId" value={this.state.stuData.studentId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="FirstName">Imie</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="FirstName" defaultValue={this.state.stuData.firstName} required />
                    </div>
                </div >
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="LastName">Nazwisko</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="LastName" defaultValue={this.state.stuData.lastName} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Email" >Email</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Email" defaultValue={this.state.stuData.email} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="GroupName">Kolo Naukowe</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="GroupName" defaultValue={this.state.stuData.groupName} required>
                            <option value="">-- Wybierz --</option>
                            {GroupList.map(group =>
                                <option key={group.groupId} value={group.groupName}>{group.groupName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}
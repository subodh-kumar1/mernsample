import React,{Component} from 'react';
import axios from 'axios';

export default class Create extends Component{
    constructor(props){
        super(props);
        this.onChangePersonName =this.onChangePersonName.bind(this);
        this.onChangeBusinessName =this.onChangeBusinessName.bind(this);
        this.onChangeGSTNum =this.onChangeGSTNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            person_name:'',
            biz_name:'',
            gst_num:''
        };
    }
    onChangePersonName(e){
        this.setState(
            {
                person_name:e.target.value
            }
        );
    }
    onChangeBusinessName(e){
        this.setState({
            biz_name:e.target.value
        });
    }
    onChangeGSTNum(e){
        this.setState({
            gst_num : e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            biz_name: this.state.biz_name,
            gst_num: this.state.gst_num
          };
          axios.post('http://localhost:4000/business/add', obj)
              .then(res => console.log(res.data));
      
        this.setState(
            {
                person_name:'',
                biz_name:'',
                gst_num:''
            }
        );
    }
    render(){
        return (
            <div style={{marginTop:10}}>
                <h4>Welcome to Create Component</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name : </label>
                        <input type="text" className="form-control" value={this.state.person_name} onChange={this.onChangePersonName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name : </label>
                        <input type="text" className="form-control" value={this.state.biz_name} onChange={this.onChangeBusinessName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number : </label>
                        <input type="text" className="form-control" value={this.state.gst_num} onChange={this.onChangeGSTNum}></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"></input>
                    </div>
                </form>
                <div>
                    <div>Person : {this.state.person_name}</div>
                    <div>Biz : {this.state.biz_name}</div>
                    <div>GST : {this.state.gst_num}</div>
                </div>
            </div>
        );
    }
}
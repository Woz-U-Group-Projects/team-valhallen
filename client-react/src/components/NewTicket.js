import React, {useState} from "react";
import axios from "axios";

const NewTicket = (props) => {

    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState(0);
    const [access, setAccess] = useState(0);
    const [note, setNote] = useState("");

    function submitTicket (evt) {
        evt.preventDefault();
       // console.log("ticket user id " + this.props.userId);
        let url = "http://localhost:3001/tickets/";
        axios.post(url, {
           userId: this.userId,
            unitId: this.unitId.current.value,
            category: this.category.current.value,
            priority: this.priority.current.value,
            access: this.access.current.value,
            note: this.note.current.value,
            status: this.status.current.value,
            mainNote: this.mainNote.current.value
        }).then(response => {
            // empty the input
            this.category.current.value = "";
            this.priority.current.value = "";
            this.access.current.value = "";
            this.note.current.value = "";

        });
    };

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     console.log('Submission successful for ${category}' + this.props.userId )
    // }

    return (
        <div>
            <form onSubmit={submitTicket}>
            
            <h3> problem Category</h3>
            <select name="category" type="text" value ={category} onChange={e => setCategory(e.target.value)}>
                <option value="electrical" >Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="HVAC">HVAC</option>
                <option value="Appliances">Appliances</option>
                <option value="Fixtures">Fixtures</option>
            </select>
            <h3>Service Priority Level</h3>
            <select name="priority" type="number" value = {priority} onChange={e => setPriority(e.target.value)}>
                <option value={1} >High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
            </select>
            <h3>Access</h3>
            <select name="Access" type="number" value = {access} onChange={e => setAccess(e.target.value)}>
                <option value={1} >Granted</option>
                <option value={0}>Not Granted</option>
            </select>
            <h3>Problem Notes</h3>
            <input name="Notes" type="text" value = {note} onChange={e => setNote(e.target.value)} />
            <input type="submit" value="Submit" />
            </form>
           
        </div>
    );
}

export default NewTicket;


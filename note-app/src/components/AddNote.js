const AddNote = () => {
  return (
    <div className="note new">
      <textarea rows="8" cols="10" placeholder="Type to add new note">
        {" "}
      </textarea>
      <div className="note-footer"> 
        <small> 100 remaining character</small>
        <button className="save"> Save</button>
      </div>
    </div>
  );
};

export default AddNote;
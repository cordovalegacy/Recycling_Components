import { Link } from "react-router-dom"

const Button = (props) => {

    const { BtnVal, berryHandler, Berry, pokemon, deleteHandler } = props

    return (
        <>
            {/* // edit button submit */}
            {BtnVal === 'Edit Pokemon' ? <input type="submit" value={BtnVal} /> : null}
                {/* //edit one button link */ }
            {BtnVal === 'Edit' ? <button className="green-btn"><Link to={`/editOne/${pokemon._id}`}>Edit</Link></button> :null}
            {/* //button group */}
            {BtnVal === 'EditDeleteBerries' ?
            <div className="card-buttons">
                <button className="green-btn"><Link to={`/editOne/${pokemon._id}`}>Edit</Link></button>
                <button className="red-btn" onClick={() => deleteHandler(pokemon._id)}>Delete</button>
                <img onClick={() => berryHandler(pokemon)} className="berry" src={Berry} alt="berry" />
            </div> : null}
        </>
    )
}

export default Button
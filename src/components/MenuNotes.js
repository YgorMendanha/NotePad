import { GoKebabVertical } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

function MenuNotes({editar,apagar}){   

    return(
        <>
          <button className="button" data-bs-toggle="dropdown">
            <GoKebabVertical/>
          </button>
        <ul className="dropdown-menu dropdown" >
            <li>
              <button className="dropdown-item" onClick={() => editar()}>
                <FiEdit/> Editar
              </button>
            </li>
            
            <li>
              <button className="dropdown-item" onClick={() => apagar()}>
                <AiFillDelete/> Deletar
              </button>
            </li>            
        </ul>
      </> 
)
}

export default MenuNotes
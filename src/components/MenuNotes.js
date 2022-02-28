import { GoKebabVertical } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'

function MenuNotes({ edit, remove }) {
	return (
		<>
			<button className="button" data-bs-toggle="dropdown">
				<GoKebabVertical />
			</button>
			<ul className="dropdown-menu dropdown">
				<li>
					<button className="dropdown-item" onClick={() => edit()}>
						<FiEdit /> Editar
					</button>
				</li>

				<li>
					<button className="dropdown-item" onClick={() => remove()}>
						<AiFillDelete /> Deletar
					</button>
				</li>
			</ul>
		</>
	)
}

export default MenuNotes

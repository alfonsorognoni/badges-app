import React from 'react';
import Modal from './Modal';

function ModalDeleteBadge(props) {
    return (
        <Modal isOpen={props.isOpenModal} onCloseModal={props.onCloseModal}>
            <div className="DeleteBadgeModal">
                <div>
                    <h1>Está seguro?</h1>
                    <p>Está por eliminar este Badge</p>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Eliminar</button>
                    <button onClick={props.onCloseModal} className="btn btn-primary">Cancelar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalDeleteBadge;
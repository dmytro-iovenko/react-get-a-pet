function ConfirmWindow() {
    return(
        <div id="confirm" className="modal fade">
            <div className="modal-dialog modal-confirm modal-dialog-centered modal-sm">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i className="fas fa-check fa-4x"></i>
                        </div>
                        <h4 className="modal-title w-100">Thank you!</h4>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">Your message has been sent.</p>
                    </div>
                    <div className="modal-footer">
                        <div className="d-grid">
                            <button className="btn btn-success btn-block" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmWindow;

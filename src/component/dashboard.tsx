import React from 'react';
import "./dashboard.scss"
const Dashboard: React.FC = () => {
    return (
        <div className="table-container">
            <div className='retour-bar'>
            <button className="btn-retour d-block mb-12">Retour</button></div>
            <div className="header-actions">

                <div className='d-flex gap-1 test'><input type="text" placeholder="Catégorie" className="input-category" />
                    <button className="btn">Rechercher</button>
                    <button className="btn">Annuler</button>

                </div>

                <div className='d-flex gap-1 test'>
                    <input type="text" placeholder="Catégorie" className="input-category" />
                    <button className="btn">Enregistrer</button>
                    <button className="btn">Annuler</button>

                </div>
            </div>

            <table className="category-table">
                <thead>
                    <tr>
                        <th>Catégories produits</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Copieurs, imprimantes & multifonctions</td>
                        <td>
                            <button className="action-btn edit-btn" ><i className="bi bi-pencil-square" style={{ color: 'white' }}></i></button>
                            <button className="action-btn delete-btn"><i className="bi bi-x" style={{ color: 'white' }}></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Smartphone, Tablette, PC, Laptop, PDA</td>
                        <td>
                            <button className="action-btn edit-btn"> <i className="bi bi-pencil-square" style={{ color: 'white' }}></i></button>
                            <button className="action-btn delete-btn"><i className="bi bi-x" style={{ color: 'white' }}></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Dashboard;

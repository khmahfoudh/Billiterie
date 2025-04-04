import React from "react";

const AddProduct = () => {
    const [product, setProduct] = useState({
        image: "",
        nom: "",
        prix: "",
        desc: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Produit ajouté :", product);
    };

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">L'image du produit</label>
                                <input type="text" className="form-control" name="image" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nom du produit</label>
                                <input type="text" className="form-control" name="nom" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Prix</label>
                                <input type="number" className="form-control" name="prix" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" name="desc" onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Ajouter un produit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;

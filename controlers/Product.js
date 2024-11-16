import Product from "../Moduls/Product.js";

const addProduct = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const { name, description, image_url } = req.body;

        // Check for missing fields
        if (!name || !description || !image_url || !user_id) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new product
        const product = await Product.create({ name, description, image_url, user_id });
        res.status(200).json({ message: "Product created successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product_id = req.params.product_id;
        const { name, description, image_url } = req.body;

        // Find and update the product, returning the updated product
        const product = await Product.findByIdAndUpdate(
            product_id,
            { name, description, image_url },
            { new: true } // Returns the updated document
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product_id = req.params.product_id;

        // Find and delete the product
        const product = await Product.findByIdAndDelete(product_id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getProduct = async (req, res) => {
    try {
        const user_id = req.params.user_id;

        // Find products that match the user_id
        const products = await Product.find({ user_id });

        if (!products || products.length === 0) {
            return res.status(200).json({ message: "Add some products" });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

export { addProduct, updateProduct, deleteProduct, getProduct };

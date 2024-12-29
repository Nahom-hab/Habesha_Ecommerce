import Product from "../models/product.js";

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, productType, images } = req.body;

        // Validation: Check if all required fields are present
        if (!name || !description || !price || !productType || !images) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create the product
        const product = new Product({
            name,
            description,
            price,
            productType,
            images
        });

        // Save to the database
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, productType, images } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        // Update product fields if provided
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.productType = productType || product.productType;
        product.images = images || product.images;

        // Save changes
        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        await product.deleteOne(); // Remove product

        res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


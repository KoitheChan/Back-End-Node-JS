const pool = require('../../db');
const queries = require('./queries');
const getShipments = (req, res) => {
    pool.query(queries.getShipments, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getShipmentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getShipmentsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudents = (req, res) => {
    const {shipments_id, shipments_name, shipments_destination, shipments_origin, shipments_status} = req.body;
    //check shipment id 
    pool.query(queries.checkShipmentsID, [shipments_id], (error, results) => {
        if (results.rows.length) {
            if (error) throw error;
            res.send("Shipment ID already exists.");
        }
    });
    
};

module.exports = {
    getShipments,
    getShipmentsById,
    addStudents,
};
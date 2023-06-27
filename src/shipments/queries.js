const getShipments = "SELECT * FROM shipments";
const getShipmentsById = "SELECT * FROM shipments WHERE shipments_id = $1";
const checkShipmentsID = "SELECT * FROM shipments WHERE shipments_id = $1";

module.exports = {
    getShipments,
    getShipmentsById,
    checkShipmentsID,
}
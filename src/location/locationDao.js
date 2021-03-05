
const INTERNAL_ERROR_MSG_DTL = "There was an internal error in the commission dao service";
const procedure = "CALL enterprises.sp_sve_validate_exist_commissions($economicGroupId);";
const procedureMAC = "CALL enterprises.sp_sve_get_ach_transferer_commissions;";

class LocationDAO {
    constructor() {
    }

    /**
     * Initialize Model
     */
    async initModels() {
    }

    async initialize() {
    }

    async getLocation(event) {
        try {
            let resultsFake = {
                Kenobi: [-500, -200],
                Skywalker: [100, -100],
                Sato: [500, 100]
            }
            return resultsFake;
        } catch (err) {
            throw err;
        }
    }

}

exports.LocationDAO = LocationDAO;

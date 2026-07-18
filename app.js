
const StorageController = {
    STORAGE_KEY: 'caretrack_data',

    getAllResidents: function(){
        const rawData = localStorage.getItem(this.STORAGE_KEY);

        return JSON.parse(rawData) || [];
    },

    saveAllResidents: function(residentsArray){
        if(!Array.isArray(residentsArray)){
            console.error("Storage Error: Provided data must be a valid array.");
            return;
        }

        const stringData = JSON.stringify(residentsArray);
        localStorage.setItem(this.STORAGE_KEY,stringData);
    },

    getResidentById: function(id){
        const residents = this.getAllResidents();
        const targetResident = residents.find(res => res.id === id);
        return targetResident || null;
    }
};

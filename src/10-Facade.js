class Complaints{
    constructor() {
        this.complaints = [];
    }
    //Add complain
    addComplaint(complaint) {
        this.complaints.push(complaint);
        return this.replyMessage(complaint);
    }
    //find a complain
    getComplaint(id) {
        return this.complaints.find(complaint => complaint.id === id);
    }
    replyMessage(complaint) {}
}

//FOR PRODUCT COMPLAINTS
class ProductComplaints extends Complaints {
    constructor() {
      super();
      if (ProductComplaints.exists) {
        return ProductComplaints.instance;
      }
      ProductComplaints.instance = this;
      ProductComplaints.exists = true;
      return this;
    }
  
    replyMessage({ id, customer, details }) {
      return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
    }
}

//FOR SERVICFE COMPLAINTS
class ServiceComplaints extends Complaints {
    constructor() {
      super();
      if (ServiceComplaints.exists) {
        return ServiceComplaints.instance;
      }
      ServiceComplaints.instance = this;
      ServiceComplaints.exists = true;
      return this;
    }
  
    replyMessage({ id, customer, details }) {
      return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.`;
    }
}

//FACADE (OR PUBLIC API)
let currentId = 0;

class ComplaintRegistry {
  registerComplaint(customer, type, details) {
    const id = ComplaintRegistry._uniqueIdGenerator();
    let registry;
    if (type === 'service') {
      registry = new ServiceComplaints();
    } else {
      registry = new ProductComplaints();
    }
    return registry.addComplaint({ id, customer, details });
  }

  static _uniqueIdGenerator() {
    return ++currentId;
  }
}


const registry = new ComplaintRegistry();

const reportService = registry.registerComplaint('Martha', 'service', 'availability');
const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color');
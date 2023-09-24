let company = "Google";

// encapsulation - getters and setters
let getCompany = () => {
  return company;
};

let setCompany = function (newCompany) {
  company = newCompany;
};

export { company, getCompany, setCompany };

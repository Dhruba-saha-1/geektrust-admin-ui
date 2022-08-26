export default class User {
    constructor(id, name, email, role, isSelected = false) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.isSelected = isSelected;
    }
}
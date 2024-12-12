
frappe.listview_settings["Task"] = {
    onload:(listview)=> {
        if (frappe.user.has_role('Task member')) {
            frappe.route_options = {
                "assigned_to":["=",frappe.session.user]
            };
            frappe.set_route('List', 'Task');
        };
    }
};
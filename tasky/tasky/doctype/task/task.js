// Copyright (c) 2024, abdelrhamn younes and contributors
// For license information, please see license.txt


// frappe.ui.form.on("Task", 
// 	// refresh(frm) {

// 	// },
//     "assigned_to",function(frm){
//         if(frappe.user.has_role("Task member")){
//             frappe.msgprint(__("you  are not allowed to change that"))
//             frm.set_value("assigned_to",cur_frm.doc.assigned_to)

//         }
    
// });

frappe.ui.form.on("Task", {
    // setup:(frm)=>{
    //     cur_frm.set_value("assigned_by",frappe.session.user)
    // },
    assigned_to: function (frm) {
        if (frappe.user.has_role("Task member") && !frappe.user.has_role("Administrator")) {
            frappe.throw(__("You are not allowed to change this field."));
        }
    },
    due_date: function (frm) {
        if (frappe.user.has_role("Task member") && !frappe.user.has_role("Administrator")) {
            frappe.throw(__("You are not allowed to change this field."));
        }
    },
    description: function (frm) {
        if (frappe.user.has_role("Task member") && !frappe.user.has_role("Administrator")) {
            frappe.throw(__("You are not allowed to change this field."));
        }
    },
    task_title: function (frm) {
        if (frappe.user.has_role("Task member") && !frappe.user.has_role("Administrator")) {
            frappe.throw(__("You are not allowed to change this field."));
        }
    },
    refresh: function(frm){
        update_progress_bar(frm);
        if (frm.is_new()) {
            cur_frm.set_value("assigned_by",frappe.session.user)
        }
    },
    progress: function(frm){
        update_progress_bar(frm);
    }
    

});

function update_progress_bar(frm) {
    const progress = frm.doc.progress || 0; 
    const progress_bar_html = `
        <div style="width: 100%; background-color: #f3f3f3; border-radius: 5px; overflow: hidden;">
            <div style="width: ${progress}%; background-color: #4caf50; height: 20px; transition: width 0.5s;">
            </div>
        </div>
        <p style="text-align: center; margin-top: 5px;">${progress}%</p>
    `;


    frm.set_df_property('progress_bar_html', 'options', progress_bar_html);
}
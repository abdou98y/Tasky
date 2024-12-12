# Copyright (c) 2024, abdelrhamn younes and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Task(Document):
    
	def before_save(self):
		fields_to_check =["assigned_to","due_date","description","task_title"]
		if frappe.session.user != "Administrator" and "Task member" in frappe.get_roles(frappe.session.user):
  			if  self.changed(fields_to_check):
						frappe.throw("you are not allowed")
  
	def changed(self,fields):
		this_task =   frappe.get_doc("Task",self.get("name"))
		for field in fields:
			if str(self.get(field)) != str(this_task.get(field)):
				return True
		return False



def redirect_users_to_page():
    frappe.local.response["home_page"] = "app/task"

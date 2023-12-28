package com.notification;
import java.util.ArrayList;
import java.util.List;

public class User {
	private List<String> notificationPreference;
	public User(List<String> notificationPreference) {
		this.notificationPreference=notificationPreference;
		
	}
	
	public List<String> getNotificationPreference(){
		return notificationPreference;
		
	}

}



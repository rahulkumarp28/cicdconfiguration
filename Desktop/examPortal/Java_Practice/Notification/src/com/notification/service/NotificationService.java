package com.notification.service;

import java.util.List;
import com.notification.User;
import com.notification.Notification;

public class NotificationService{
	public void sendNotification(User user, Notification notification) {
		List<String>preference=user.getNotificationPreference();
		if(preference.contains("push")) {
			notification.send(user);
		}
	}
}
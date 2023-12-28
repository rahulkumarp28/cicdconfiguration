package com.notification.NotificationType;

import com.notification.Notification;
import com.notification.User;

public class InAppNotification implements Notification {
	
	@Override
	public void send(User user) {
		System.out.println("Sending in app notification to user: "+user);
	}

}

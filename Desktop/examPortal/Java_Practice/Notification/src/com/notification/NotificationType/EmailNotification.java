package com.notification.NotificationType;
import com.notification.Notification;
import com.notification.User;

public class EmailNotification implements Notification {
	
	@Override
	public void send(User user) {
		System.out.println("Sending email notification to user: "+user);
	}

}
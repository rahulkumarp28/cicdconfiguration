package com.notification.NotificationType;
import com.notification.Notification;
import com.notification.User;

public class PushNotification implements Notification {
	
	@Override
	public void send(User user) {
		System.out.println("Sending push notification to user: "+user);
	}

}

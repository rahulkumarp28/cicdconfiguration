package com.notification.NotificationFactory;

import com.notification.Notification;
import com.notification.NotificationType.EmailNotification;
import com.notification.NotificationType.InAppNotification;
import com.notification.NotificationType.PushNotification;

public class NotificationFactory {
	public Notification createNotification(String notificationType) {
		switch(notificationType) {
		case "push":
			return new PushNotification();
		case "email":
			return new EmailNotification();
		case "in-app":
			return new InAppNotification();
		default:
			throw new IllegalArgumentException("Invalid notification type: "+ notificationType);
		}
	}

}

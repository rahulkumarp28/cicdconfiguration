package com.notification.Test;

import java.util.List;

import com.notification.Notification;
import com.notification.User;
import com.notification.MetricsAndReporting.Metrics;
import com.notification.NotificationFactory.NotificationFactory;
import com.notification.service.NotificationService;

public class NotificationSystemTest {

	public static void main(String[] args) {
		User user=new User(List.of("push","email"));
		NotificationFactory factory=new NotificationFactory();
		NotificationService notificationService=new NotificationService();
		Metrics metrics=new Metrics();
		
		Notification pushNotification=factory.createNotification("push");
		Notification emailNotification=factory.createNotification("email");
		
		notificationService.sendNotification(user, pushNotification);
		notificationService.sendNotification(user, emailNotification);
		
		metrics.trackEngagement(user, pushNotification);
		metrics.trackEngagement(user, pushNotification);
		
		String report=metrics.generateReport();
		
		System.out.println(report);
					
	}

}

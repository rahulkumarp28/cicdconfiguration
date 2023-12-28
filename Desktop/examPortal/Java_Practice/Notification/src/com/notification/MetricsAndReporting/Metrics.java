package com.notification.MetricsAndReporting;

import com.notification.Notification;
import com.notification.User;

public class Metrics {
	public void trackEngagement(User user,Notification notification) {
		System.out.println("Tracking engagement for user:  "+ user);
	}
	public String generateReport() {
		return "Generated report";
	}

}

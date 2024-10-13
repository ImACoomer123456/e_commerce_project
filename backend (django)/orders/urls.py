# orders/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.OrderListView.as_view(), name='order-list'),  # List all orders
    path('<int:pk>/', views.OrderDetailView.as_view(), name='order-detail'),  # Order detail by ID
    path('create/', views.OrderCreateView.as_view(), name='order-create'),  # Create a new order
    path('update/<int:pk>/', views.OrderUpdateView.as_view(), name='order-update'),  # Update an order
    path('delete/<int:pk>/', views.OrderDeleteView.as_view(), name='order-delete'),  # Delete an order
]

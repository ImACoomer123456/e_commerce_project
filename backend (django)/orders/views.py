# orders/views.py
from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Order

class OrderListView(ListView):
    model = Order
    template_name = 'orders/order_list.html'

class OrderDetailView(DetailView):
    model = Order
    template_name = 'orders/order_detail.html'

class OrderCreateView(CreateView):
    model = Order
    fields = ['user', 'product', 'quantity']  # Adjust the fields based on your Order model
    template_name = 'orders/order_form.html'

class OrderUpdateView(UpdateView):
    model = Order
    fields = ['user', 'product', 'quantity']  # Adjust the fields based on your Order model
    template_name = 'orders/order_form.html'

class OrderDeleteView(DeleteView):
    model = Order
    template_name = 'orders/order_confirm_delete.html'
    success_url = '/'

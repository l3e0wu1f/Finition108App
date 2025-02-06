# Use the official NGINX image
FROM nginx:latest

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy application static files to Nginx HTML directory
COPY frontend /usr/share/nginx/html

# Copy the entrypoint script
COPY nginx-entrypoint.sh /usr/local/bin/nginx-entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /usr/local/bin/nginx-entrypoint.sh

# Expose port 80 and 443
EXPOSE 80
EXPOSE 443

# Set the entrypoint to our script
ENTRYPOINT ["/usr/local/bin/nginx-entrypoint.sh"]

# Default command to start NGINX (this will be run by the entrypoint script)
CMD ["nginx", "-g", "daemon off;"]

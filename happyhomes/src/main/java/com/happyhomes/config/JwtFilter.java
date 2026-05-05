//package com.happyhomes.config;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.util.ArrayList;
//
//@Component
//public class JwtFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String path = request.getRequestURI();
//
//        // 🔥 LOGIN API KO SKIP KAR
////        if (path.equals("/api/admin/login")) {
////            filterChain.doFilter(request, response);
////            return;
////        }
//
//        if (path.contains("/api/admin/login")) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader != null && authHeader.startsWith("Bearer ")) {
//
//            String token = authHeader.substring(7);
//            String email = jwtUtil.extractUsername(token);
//
//            if (email != null) {
//                UsernamePasswordAuthenticationToken auth =
//                        new UsernamePasswordAuthenticationToken(email, null, new ArrayList<>());
//
//                SecurityContextHolder.getContext().setAuthentication(auth);
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}



package com.happyhomes.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String path = request.getRequestURI();

        // 🔥 LOGIN SKIP
//        if (path.contains("/api/admin/login")) {
//            filterChain.doFilter(request, response);
//            return;
//        }

//        if (path.startsWith("/api/admin/login") ||
//                path.startsWith("/api/careers/apply") ||
//                path.startsWith("/api/pricing")) {
//
//            filterChain.doFilter(request, response);
//            return;
//        }

        if (path.startsWith("/api/admin/login") ||
                path.startsWith("/api/careers/apply") ||
                path.startsWith("/api/pricing") ||
                path.startsWith("/api/gallery")) {   // 🔥 ADD THIS

            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");

//        if (authHeader != null && authHeader.startsWith("Bearer ")) {
//
//            String token = authHeader.substring(7);
//
//            try {
//                String email = jwtUtil.extractUsername(token);
//
//                if (email != null) {
//                    UsernamePasswordAuthenticationToken auth =
//                            new UsernamePasswordAuthenticationToken(email, null, new ArrayList<>());
//
//                    SecurityContextHolder.getContext().setAuthentication(auth);
//                }
//
//            } catch (Exception e) {
//                System.out.println("JWT Error: " + e.getMessage());
//            }
//        }


        if (authHeader != null && authHeader.startsWith("Bearer ")) {

            String token = authHeader.substring(7);

            try {
                if (jwtUtil.validateToken(token)) {

                    String email = jwtUtil.extractUsername(token);

                    UsernamePasswordAuthenticationToken auth =
                            new UsernamePasswordAuthenticationToken(email, null, new ArrayList<>());

                    SecurityContextHolder.getContext().setAuthentication(auth);
                }

            } catch (Exception e) {
                System.out.println("JWT Error: " + e.getMessage());
            }
        }

        filterChain.doFilter(request, response);
    }
}
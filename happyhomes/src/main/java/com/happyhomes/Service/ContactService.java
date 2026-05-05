package com.happyhomes.Service;

import com.happyhomes.Repository.ContactRepository;
import com.happyhomes.entity.ContactMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repo;

    public ContactMessage save(ContactMessage msg) {
        return repo.save(msg);
    }

    public List<ContactMessage> getAll() {
        return repo.findAll();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}